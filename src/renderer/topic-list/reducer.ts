import * as uuidv4 from 'uuid-v4'
import { ActionType } from '../actions'
import { Topic } from '../types'
export type TopicListState = {
  topics: Topic[],
  editing?: Topic
}
const initialState: TopicListState = {
  topics: [],
  editing: null
}

const newTopic = (_state: TopicListState): TopicListState => {
  const topic: Topic = {
    label: '',
    uuid: uuidv4()
  }
  return {
    ..._state,
    editing: topic
  }
}

const editLabel = (_state: TopicListState, label: string): TopicListState => {
  const topic = {
    ..._state.editing,
    label
  }
  return {
    ..._state,
    editing: topic
  }
}

const done = (_state: TopicListState): TopicListState => {
  const topic = {
    ..._state.editing,
    text: '',
    createdAt: new Date(),
    modifiedyAt: new Date()
  }
  const topics = [..._state.topics.filter(topic => topic.uuid !== _state.editing.uuid), topic]
  const res = {
    ..._state,
    topics,
    editing: null
  }
  return res
}

const cancel = (_state: TopicListState): TopicListState => {
  return {
    ..._state,
    editing: null
  }
}

const remove = (_state: TopicListState, uuid: string): TopicListState => {
  return {
    ..._state,
    topics: _state.topics.filter(topic => topic.uuid !== uuid)
  }
}

const loadTopics = (_state: TopicListState, topics: any[]): TopicListState => {
  return {
    ..._state,
    topics
  }
}

const updateLabel = (_state: TopicListState, uuid: string, label: string): TopicListState => {
  const topics = _state.topics.map(topic => {
    if (topic.uuid !== uuid) {
      return topic
    } else {
      return {
        ...topic,
        label
      }
    }
  })

  return {
    ..._state,
    topics
  }
}

const updateText = (_state: TopicListState, uuid: string, text: string): TopicListState => {
  const topics = _state.topics.map(topic => {
    if (topic.uuid !== uuid) {
      return topic
    } else {
      return {
        ...topic,
        text
      }
    }
  })

  return {
    ..._state,
    topics
  }
}

export default function TopicListReducer(state: TopicListState = initialState, action: ActionType): TopicListState {
  switch (action.type) {
    case 'TOPIC_LIST_NEW_TOPIC':
      return newTopic(state)

    case 'TOPIC_LIST_EDIT_LABEL':
      return editLabel(state, action.payload.label)

    case 'TOPIC_LIST_DONE':
      return done(state)

    case 'TOPIC_LIST_CANCEL':
      return cancel(state)

    case 'TOPIC_LIST_REMOVE':
      return remove(state, action.payload.uuid)

    case 'TOPIC_LIST_LOAD_TOPICS':
      return loadTopics(state, action.payload.topics)

    case 'TOPIC_LIST_UPDATE_LABEL':
      return updateLabel(state, action.payload.uuid, action.payload.label)

    case 'TOPIC_LIST_UPDATE_TEXT':
      return updateText(state, action.payload.uuid, action.payload.text)

    default:
      return state
  }
}
