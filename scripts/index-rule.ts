import * as path from 'path'
import { createFileSync, toLowerCamelCase, toUpperCamelCase } from './utils'

const indexPlugin = (meta, opts) => {
  const func = (source, fileName, inputType, outputType) => {
    if (source && source !== '') {
      return source
    }

    const arr = path.dirname(fileName).split(path.sep)
    const name = arr[arr.length - 1]
    const upperName = toUpperCamelCase(name)
    const lowerName = toLowerCamelCase(name)

    const actionSource = `import { ${upperName}DispatchAction } from '../actions'

export class ${upperName}Action extends ${upperName}DispatchAction {}
`

    const reducerSource = `import { ActionType } from '../actions'

export interface ${upperName}State {

}

const initialState: ${upperName}State = {

}

export default function ${upperName}Reducer(state: ${upperName}State = initialState, action: ActionType): ${upperName}State {
  switch (action.type) {
    default: return state
  }
}
`

    const indexSource = `import * as React from 'react'

import { connector, Props } from '../connector'

const ${lowerName}Render: React.StatelessComponent<Props> = props => {
  return <div />
}

export default connector(${lowerName}Render)
`

    createFileSync(path.join(path.dirname(fileName), 'action.ts'), actionSource)
    createFileSync(path.join(path.dirname(fileName), 'reducer.ts'), reducerSource)
    return indexSource
  }

  return {
    func,
    inputTypes: ['.ts'],
    name: 'index',
    outputTypes: ['.ts']
  }
}

export default indexPlugin
