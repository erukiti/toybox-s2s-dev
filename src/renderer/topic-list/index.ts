import { connect } from 'react-redux'
import { Dispatch as ReduxDispatch } from 'redux'

import TopicListComponent from './component'
import { State } from '../reducers'
import { Dispatcher, ActionType } from '../actions'
import TopicListActionCreator from './action'

const mapStateToProps = (state: State) => {
  return state
}

type DispatchProps = { dispatch: ReduxDispatch<ActionType> }
const mapDispatchToProps = (dispatch: ReduxDispatch<ActionType>): DispatchProps => ({ dispatch })

export type TopicListProps = State & TopicListActionCreator

const dispatcher = new Dispatcher()
const actions = new TopicListActionCreator(dispatcher)

let isFirst = true

const mergeProps = (stateProps: State, { dispatch }: DispatchProps, ownProps) => {
  dispatcher.setDispatch(dispatch)

  if (isFirst && '_first' in actions) {
    actions['_first']()
    isFirst = false
  }

  const props = {
    ...stateProps,
    ...ownProps
  }

  Object.getOwnPropertyNames(Object.getPrototypeOf(actions))
    .filter(key => key !== 'constructor' || key.substr(0, 1) !== '_')
    .forEach(key => {
      props[key] = actions[key].bind(actions)
    })

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopicListComponent)
