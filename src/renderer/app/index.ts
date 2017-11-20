import {connect} from 'react-redux'

import AppComponent from './component'
import AppAction from './action'
import {State} from '../reducers'
import {ActionType, Dispatch} from '../actions'


const mapStateToProps = (state: State) => {
    return state
}

const mapDispatchToProps = (dispatch: Dispatch) => ({dispatch})

export type AppProps = State & AppAction

const action = new AppAction()

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AppComponent)
