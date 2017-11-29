import { connect } from 'react-redux'
import { Dispatch as ReduxDispatch } from 'redux'

import { ActionType, Dispatcher } from '../actions'
import { State } from '../reducers'
import TopicReferenceActionCreator from './action'
import TopicReferenceComponent from './component'

const mapStateToProps = (state: State) => {
  return state
}

interface DispatchProps {
  dispatch: ReduxDispatch<ActionType>
}

const mapDispatchToProps = (dispatch: ReduxDispatch<ActionType>) => ({ dispatch })

export type TopicReferenceProps = State & TopicReferenceActionCreator

const dispatcher = new Dispatcher()
const actions = new TopicReferenceActionCreator(dispatcher)

let isFirst = true

const mergeProps = (stateProps: State, { dispatch }: DispatchProps, ownProps) => {
  dispatcher.setDispatch(dispatch)
  if (isFirst && '_first' in actions) {
    actions._first()
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopicReferenceComponent)
