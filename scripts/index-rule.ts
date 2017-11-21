import * as path from 'path'
import { toUpperCamelCase, createFileSync } from './utils'

const indexPlugin = (meta, opts) => {
  const func = (source, fileName, inputType, outputType) => {
    if (source && source !== '') {
      return source
    }

    const arr = path.dirname(fileName).split(path.sep)
    const name = arr[arr.length - 1]
    const upperName = toUpperCamelCase(name)

    const reducerSource =
`import { ActionType } from '../actions'

export type ${upperName}State = {

}

const initialState: ${upperName}State = {

}

export default function ${upperName}Reducer(state: ${upperName}State = initialState, action: ActionType): ${upperName}State {
  switch (action.type) {
    default: return state
  }
}
`

    const componentSource =
`import * as React from 'react'
// import {${upperName}Props} from './index'

export default class ${upperName}Component extends React.Component<any> {
  render() {
    return <div>
    </div>
  }
}
`

    const indexSource =
`import {connect} from 'react-redux'

import ${upperName}Component from './component'
import {State} from '../reducers'
import {dispatcher, ActionType} from '../actions'

const mapStateToProps = (state: State) => {
    return state
}

const mapDispatchToProps = (reduxDispatch) => ({reduxDispatch})

// export type ${upperName}Props = State & ActionType

const mergeProps = (stateProps, {reduxDispatch}, ownProps) => {
  const dispatch = dispatcher(reduxDispatch)
  const props = {
    ...stateProps,
    ...ownProps,
  }

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(${upperName}Component)
`

    createFileSync(path.join(path.dirname(fileName), 'reducer.ts'), reducerSource)
    createFileSync(path.join(path.dirname(fileName), 'component.tsx'), componentSource)
    return indexSource
  }

  return {
    name: 'index',
    func,
    inputTypes: ['.ts'],
    outputTypes: ['.ts'],
  }
}

export default indexPlugin
