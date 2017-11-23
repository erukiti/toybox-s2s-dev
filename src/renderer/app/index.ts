import { connect } from 'react-redux'
import { Dispatch as ReduxDispatch } from 'redux'

import AppComponent from './component'
import { State } from '../reducers'
import { dispatcher, ActionType } from '../actions'

import AppActionCreator from './action'

const mapStateToProps = (state: State) => {
    return state
}

type DispatchProps = {dispatch: ReduxDispatch<ActionType>}

const mapDispatchToProps = (dispatch: ReduxDispatch<ActionType>) => ({ dispatch })

export type AppProps = State & AppActionCreator

const actions = new AppActionCreator()

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AppComponent)
