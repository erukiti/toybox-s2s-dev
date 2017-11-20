import {connect} from 'react-redux'

import AppComponent from './component'
import {State} from '../reducers'
import {dispatcher, ActionType} from '../actions'

const mapStateToProps = (state: State) => {
    return state
}

const mapDispatchToProps = (reduxDispatch) => ({reduxDispatch})

// export type AppProps = State & ActionType

const mergeProps = (stateProps, {reduxDispatch}, ownProps) => {
  const dispatch = dispatcher(reduxDispatch)
  const props = {
    ...stateProps,
    ...ownProps,
    add: (count: number) => dispatch.app.add(count),
    sub: (count: number) => dispatch.app.sub(count),
  }

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AppComponent)
