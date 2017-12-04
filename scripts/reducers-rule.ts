import * as assert from 'assert'
import * as fs from 'fs'
import { getSelectors } from 'meta-programming-utils'
import * as path from 'path'
const globby = require('globby')

import { toLowerCamelCase, toUpperCamelCase, toUpperSnakeCase, writeSourceSync } from './utils'

const re = /([^/]+)\/reducer\./
const WasCreated = Symbol('WasCreated')

const reducersPlugin = (meta, opts) => {
  const func = (source, fileName, inputType, outputType) => {
    const t = meta.types
    const actions = []
    const names = []

    const pushAction = (dir, name, funcPath) => {
      const args = funcPath
        .get('params')
        .map(paramPath => {
          const param = paramPath.node
          if (!param.typeAnnotation || !param.typeAnnotation.typeAnnotation) {
            return { name: param.name, type: 'any' }
          } else {
            return { name: param.name, type: paramPath.get('typeAnnotation.typeAnnotation').getSource() }
          }
        })
        .filter(arg => arg.name !== '_state')
      const key = toUpperSnakeCase(`${dir}_${name}`)
      actions.push({ key, dir, name, args })
    }

    globby.sync(opts.source).map(filename2 => {
      const matched = re.exec(filename2)
      names.push(matched[1])

      const p = meta.getNodePath(filename2)
      getSelectors(p.node, 'body.*:VariableDeclaration.declarations.*:VariableDeclarator').forEach(selector => {
        const declPath = p.get(selector)
        if (getSelectors(declPath.node, 'init:ArrowFunctionExpression').length === 0) {
          return
        }
        if (getSelectors(declPath.node, 'id:Identifier').length === 0) {
          return
        }

        pushAction(matched[1], declPath.node.id.name, declPath.get('init'))
      })

      getSelectors(p.node, 'body.*:FunctionDeclaration').forEach(selector => {
        const declPath = p.get(selector)
        if (getSelectors(declPath.node, 'id:Identifier').length === 0) {
          return
        }
        pushAction(matched[1], declPath.node.id.name, declPath)
      })
    })

    const extractArgs = args => args.map(arg => `${arg.name}: ${arg.type}`).join(', ')
    const extractPayload = args => (args.length > 0 ? `{ ${extractArgs(args).replace(/,/g, ';')} }` : '{}')
    const extractPayloadWithoutType = args => (args.length > 0 ? `{ ${args.map(arg => arg.name).join(', ')} }` : '{}')

    const dirs = [...new Set(actions.map(act => act.dir))]

    const actionImports = dirs
      .map(dir => {
        return `import { ${toUpperCamelCase(dir)}Action } from './${dir}/action'\n`
      })
      .join('')

    const actionTypes = actions
      .map(action => {
        return `  | { type: '${action.key}'; payload: ${extractPayload(action.args)} }`
      })
      .join('\n')

    const properties = {}
    actions.forEach(action => {
      if (!(toLowerCamelCase(action.dir) in properties)) {
        properties[toLowerCamelCase(action.dir)] = {}
      }

      properties[toLowerCamelCase(action.dir)][action.name] = {
        args: `(${extractArgs(action.args)})`,
        dispatch: `this._dispatch({ type: '${action.key}', payload: ${extractPayloadWithoutType(action.args)} })`
      }
    })

    const dispatchActions = dirs
      .map(dir => {
        return `export class ${toUpperCamelCase(dir)}DispatchAction extends DispatchAction {
${actions
          .filter(act => act.dir === dir)
          .map(act => {
            return `  public ${act.name}(${extractArgs(act.args)}) { this._dispatch.${toLowerCamelCase(dir)}.${
              act.name
            }(${act.args.map(arg => arg.name).join(', ')}) }`
          })
          .join('\n')}
}
`
      })
      .join('\n')

    // FIXME: types.ts を parse して全部 import する

    const actionsSource = `// GENERATED! DON'T TOUCH ME!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
${actionTypes}

class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }

${Object.keys(properties)
      .map(
        key => `  public ${key}: {
${Object.keys(properties[key])
          .map(methodName => `    ${methodName}: ${properties[key][methodName].args} => void`)
          .join('\n')}
  }`
      )
      .join('\n')}

  constructor() {
${Object.keys(properties)
      .map(
        key => `    this.${key} = {
${Object.keys(properties[key])
          .map(
            methodName =>
              `      ${methodName}: ${properties[key][methodName].args} => ${properties[key][methodName].dispatch}`
          )
          .join(',\n')}
    }`
      )
      .join('\n')}
  }
}

export class DispatchAction {
  protected _dispatch: Dispatcher

  public _first() {}

  constructor() {
    this._dispatch = new Dispatcher()
  }

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch.setDispatch(dispatch)
  }
}

${dispatchActions}

${actionImports}

export class Actions {
${dirs.map(dir => `  public ${toLowerCamelCase(dir)}: ${toUpperCamelCase(dir)}Action`).join('\n')}
  constructor() {
${dirs.map(dir => `    this.${toLowerCamelCase(dir)} = new ${toUpperCamelCase(dir)}Action()`).join('\n')}
  }

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
${dirs.map(dir => `    this.${toLowerCamelCase(dir)}.setDispatch(dispatch)`).join('\n')}
  }
}
`

    const reducersSource = `// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

${names
      .map(name => {
        return `import ${toLowerCamelCase(name)}Reducer, { ${toUpperCamelCase(name)}State } from './${name}/reducer'`
      })
      .join('\n')}

export interface State {
${names.map(name => `  ${toLowerCamelCase(name)}: ${toUpperCamelCase(name)}State`).join('\n')}
}

export default combineReducers<State>({
${names.map(name => `  ${toLowerCamelCase(name)}: ${toLowerCamelCase(name)}Reducer`).join(',\n')}
})
`

    let result
    meta.traverseSource(source, {
      Program: {
        exit: nodePath => {
          result = nodePath
        }
      },
      SwitchStatement: nodePath => {
        if (nodePath[WasCreated]) {
          return
        }

        const cases = ['switch (action.type) {']
        const repl = {}
        actions.forEach(action => {
          const matched = re.exec(fileName)
          if (action.dir === matched[1]) {
            repl[action.key] = t.stringLiteral(action.key)
            cases.push(
              `  case ${action.key}: return ${action.name}(state, ${action.args
                .map(arg => `action.payload.${arg.name}`)
                .join(', ')}) `
            )
          }
        })
        cases.push('  default: return state')
        cases.push('}')
        const ast = meta.template(cases.join('\n'))(repl)
        nodePath.replaceWith(ast)
        nodePath[WasCreated] = true
      }
    })

    writeSourceSync(path.join(path.dirname(fileName), '..', 'actions.ts'), actionsSource)
    writeSourceSync(path.join(path.dirname(fileName), '..', 'reducers.ts'), reducersSource)

    return result
  }
  return {
    func,
    inputTypes: ['.ts'],
    name: 'reducers',
    outputTypes: ['BabelNodePath']
  }
}

export default reducersPlugin
