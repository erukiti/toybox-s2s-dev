const globby = require('globby')

import {toUpperCamelCase, toLowerCamelCase} from './utils'

const re = /([^/]+)\/reducer\./

const reducersPlugin = (meta, opts) => {
  const func = (source, fileName, inputType, outputType) => {

    const names = globby.sync(opts.source).map(filepath => {
      const matched = re.exec(filepath)
      return matched[1]
    })
    return `// GENERATED!!
import { combineReducers } from 'redux'

${names.map(name => {
  return `import ${toLowerCamelCase(name)}Reducer, { ${toUpperCamelCase(name)}State } from './${name}/reducer'`
}).join('\n')}

export default combineReducers({
${names.map(name => `  ${toLowerCamelCase(name)}: ${toLowerCamelCase(name)}Reducer`). join(',\n')}
})

export interface State {
${names.map(name => `  ${toLowerCamelCase(name)}: ${toUpperCamelCase(name)}State`).join('\n')}
}
`
  }
  return {
    name: 'reducers',
    func,
    inputTypes: [],
    outputTypes: ['.ts'],
  }
}

export default reducersPlugin
