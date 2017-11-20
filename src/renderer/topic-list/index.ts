import {connect} from 'react-redux'

import TopicListComponent from './component'
import {State} from '../reducers'
import {dispatcher, ActionType} from '../actions'

const mapStateToProps = (state: State) => {
    return state
}

const mapDispatchToProps = (reduxDispatch) => ({reduxDispatch})

// export type TopicListProps = State & ActionType

const mergeProps = (stateProps, {reduxDispatch}, ownProps) => {
  const dispatch = dispatcher(reduxDispatch)
  const props = {
    ...stateProps,
    ...ownProps,
    add: (label: string, text: string) => dispatch.topicList.add(label, text),
    remove: (index: number) => dispatch.topicList.remove(index),
  }

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopicListComponent)
