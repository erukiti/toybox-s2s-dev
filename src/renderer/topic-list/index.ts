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
    newTopic: () => dispatch.topicList.newTopic(),
    editLabel: (label: string) => dispatch.topicList.editLabel(label),
    editText: (text: string) => dispatch.topicList.editText(text),
    done: () => dispatch.topicList.done(),
    cancel: () => dispatch.topicList.cancel(),
    remove: (uuid: string) => dispatch.topicList.remove(uuid),
  }

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopicListComponent)
