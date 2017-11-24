const globby = require('globby')
const assert = require('assert')
const path = require('path')
const fs = require('fs')

import {toUpperCamelCase, toLowerCamelCase, toUpperSnakeCase} from './utils'

const re = /([^/]+)\/reducer\./
const WasCreated = Symbol('WasCreated')

const reducersPlugin = (meta, opts) => {
  const func = (source, fileName, inputType, outputType) => {

    const t = meta.types
    const actions = []
    const names = []

    const pushAction = (dir, name, nodePath) => {
      const args = nodePath.get('params').map(paramPath => {
        const param = paramPath.node
        if (!param.typeAnnotation || !param.typeAnnotation.typeAnnotation) {
          return {name: param.name, type: 'any'}
        } else {
          return {name: param.name, type: paramPath.get('typeAnnotation.typeAnnotation').getSource()}
        }
      }).filter(arg => arg.name !== '_state')
      const key = toUpperSnakeCase(`${dir}_${name}`)
      actions.push({key, dir, name, args})
    }

    globby.sync(opts.source).map(filepath => {
      const matched = re.exec(filepath)
      names.push(matched[1])

      meta.getNodePath(filepath).get('body').forEach(nodePath => {
        // FIXME move to meta-programming-utils

        switch (nodePath.type) {
          case 'FunctionDeclaration': {
            if (nodePath.node.id.type === 'Identifier') {
              pushAction(matched[1], nodePath.node.id.name, nodePath)
            }
            break
          }
          case 'VariableDeclaration': {
            nodePath.node.declarations.forEach((decl, index) => {
              if (decl.id.type === 'Identifier' && decl.init.type === 'ArrowFunctionExpression') {
                pushAction(matched[1], decl.id.name, nodePath.get(`declarations.${index}.init`))
              }
            })
            break
          }
        }
      })
    })

    const extractArgs = args => args.map(arg => `${arg.name}: ${arg.type}`).join(', ')
    const extractPayload = args => `{${extractArgs(args)}}`
    const extractPayloadWithoutType = args => `{${args.map(arg => arg.name).join(', ')}}`

    const actionTypes = actions.map(action => {
      return `{ type: '${action.key}', payload: ${extractPayload(action.args)}, }`
    }).join(' |\n')

    const properties = {}
    actions.forEach(action => {
      if (!(toLowerCamelCase(action.dir) in properties)) {
        properties[toLowerCamelCase(action.dir)] = {}
      }

      properties[toLowerCamelCase(action.dir)][action.name] = {
        args: `(${extractArgs(action.args)})`,
        dispatch: `this._dispatch({type: '${action.key}', payload: ${extractPayloadWithoutType(action.args)}})`
      }
    })

    const actionsSource =
`// GENERATED! DON'T TOUCH ME!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
${actionTypes}

export class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

${Object.keys(properties).map(key => `  ${key}: {
${Object.keys(properties[key]).map(methodName => `    ${methodName}: ${properties[key][methodName].args} => void`).join(',\n')}
  }`).join('\n')}

  constructor() {
${Object.keys(properties).map(key => `    this.${key} = {
${Object.keys(properties[key]).map(methodName => `      ${methodName}: ${properties[key][methodName].args} => ${properties[key][methodName].dispatch}`).join(',\n')}
    }`).join(',\n')}
  }

  setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }
}
`

    const reducersSource =
`// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

${names.map(name => {
  return `import ${toLowerCamelCase(name)}Reducer, { ${toUpperCamelCase(name)}State } from './${name}/reducer'`
}).join('\n')}

export interface State {
${names.map(name => `  ${toLowerCamelCase(name)}: ${toUpperCamelCase(name)}State`).join('\n')}
}

export default combineReducers<State>({
${names.map(name => `  ${toLowerCamelCase(name)}: ${toLowerCamelCase(name)}Reducer`). join(',\n')}
})
`

    let result
    meta.traverseSource(source, {
      Program: {
        exit: nodePath => {
          result = nodePath
        }
      },
      SwitchStatement: (nodePath) => {
        if (nodePath[WasCreated]) {
          return
        }

        const cases = ['switch (action.type) {']
        const repl = {}
        actions.forEach(action => {
          const matched = re.exec(fileName)
          if (action.dir === matched[1]) {
            repl[action.key] = t.stringLiteral(action.key)
            cases.push(`  case ${action.key}: return ${action.name}(state, ${action.args.map(arg => `action.payload.${arg.name}`).join(', ')}) `)
          }
        })
        cases.push('  default: return state')
        cases.push('}')
        const ast = meta.template(cases.join('\n'))(repl)
        nodePath.replaceWith(ast)
        nodePath[WasCreated] = true
      }
    })

    fs.writeFileSync(path.join(path.dirname(fileName), '..', 'actions.ts'), actionsSource)
    fs.writeFileSync(path.join(path.dirname(fileName), '..', 'reducers.ts'), reducersSource)

    return result
  }
  return {
    name: 'reducers',
    func,
    inputTypes: ['.ts'],
    outputTypes: ['BabelNodePath'],
  }
}

export default reducersPlugin
