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

    const actionSource = 
`import { loadDoneTasks, saveDoneTasks } from '../../handling'
import { store } from '../'
import { dispatcher, ActionType } from '../actions'
import { Dispatch as ReduxDispatch } from 'redux'

export default class ${upperName}ActionCreator {
  _dispatch

  _first() {

  }


}
`

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
import {${upperName}Props} from './index'

export default class ${upperName}Component extends React.Component<${upperName}Props> {
  render() {
    return <div>
    </div>
  }
}
`

    const indexSource =
`import { connect } from 'react-redux'
import { Dispatch as ReduxDispatch } from 'redux'

import ${upperName}Component from './component'
import { State } from '../reducers'
import { dispatcher, ActionType } from '../actions'
import ${upperName}ActionCreator from './action'


const mapStateToProps = (state: State) => {
    return state
}

type DispatchProps = {dispatch: ReduxDispatch<ActionType>}

const mapDispatchToProps = (dispatch: ReduxDispatch<ActionType>) => ({ dispatch })

export type ${upperName}Props = State & ${upperName}ActionCreator

const actions = new ${upperName}ActionCreator()

let isFirst = true

const mergeProps = (stateProps: State, { dispatch }: DispatchProps, ownProps) => {
  actions._dispatch = dispatcher(dispatch)
  if (isFirst && '_first' in actions) {
    actions.['_first']()
    isFirst = false
  }

  const props = {
    ...stateProps,
    ...ownProps
  }

  Object.getOwnPropertyNames(Object.getPrototypeOf(actions))
    .filter(key => key !== 'constructor' && key.substr(0, 1) !== '_')
    .forEach(key => {
      props[key] = actions[key].bind(actions)
    })

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(${upperName}Component)
`

    createFileSync(path.join(path.dirname(fileName), 'action.ts'), actionSource)
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
