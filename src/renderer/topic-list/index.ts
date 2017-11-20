import {connect} from 'react-redux'

import TopicListComponent from './component'
import TopicListAction from './action'
import {State} from '../reducers'
import {ActionType, Dispatch} from '../actions'


const mapStateToProps = (state: State) => {
    return state
}

const mapDispatchToProps = (dispatch: Dispatch) => ({dispatch})

export type TopicListProps = State & TopicListAction

const action = new TopicListAction()

const mergeProps = (stateProps, {dispatch}, ownProps) => {
  action.dispatch = dispatch

  const props = {...stateProps, ...ownProps}

  Object.getOwnPropertyNames(Object.getPrototypeOf(action)).forEach(name => {
    if (name !== 'constructor') {
      props[name] = action[name].bind(action)
    }
  })

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopicListComponent)
