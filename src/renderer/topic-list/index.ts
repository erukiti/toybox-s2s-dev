import { connect } from 'react-redux'

import TopicListComponent from './component'
import { State } from '../reducers'
import { dispatcher, ActionType } from '../actions'

import { store } from '..'
import { loadTopics, saveTopics } from '../../handling'

const mapStateToProps = (state: State) => {
  return state
}

const mapDispatchToProps = reduxDispatch => ({ reduxDispatch })

// export type TopicListProps = State & ActionType

let isFirst = true

const mergeProps = (stateProps, { reduxDispatch }, ownProps) => {
  const dispatch = dispatcher(reduxDispatch)

  if (isFirst) {
    dispatch.topicList.loadTopics(loadTopics('_'))
    isFirst = false
  }

  const props = {
    ...stateProps,
    ...ownProps,
    newTopic: () => dispatch.topicList.newTopic(),
    editLabel: (label: string) => dispatch.topicList.editLabel(label),
    editText: (text: string) => dispatch.topicList.editText(text),
    done: () => {
      dispatch.topicList.done()
      const state: State = <any>store.getState()
      saveTopics('_', state.topicList.topics)
    },
    cancel: () => dispatch.topicList.cancel(),
    remove: (uuid: string) => dispatch.topicList.remove(uuid)
  }

  return props
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopicListComponent)
