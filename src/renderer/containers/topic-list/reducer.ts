import * as uuidv4 from 'uuid-v4'
import { Topic } from '../../../types'
import { changeProperty } from '../../utils'
import { ActionType } from '../actions'
export interface TopicListState {
  topics: Topic[]
}
const initialState: TopicListState = {
  topics: []
}

const editLabel = (_state: TopicListState, uuid: string, label: string): TopicListState => {
  return {
    topics: changeProperty(_state.topics, uuid, 'label', label)
  }
}

const editText = (_state: TopicListState, uuid: string, text: string): TopicListState => {
  return {
    topics: changeProperty(_state.topics, uuid, 'text', text)
  }
}

const add = (_state: TopicListState, label: string, text: string): TopicListState => {
  const topic: Topic = {
    label,
    text,
    uuid: uuidv4(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    rev: ''
  }
  return {
    ..._state,
    topics: [..._state.topics, topic]
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

export default function TopicListReducer(state: TopicListState = initialState, action: ActionType): TopicListState {
  switch (action.type) {
    case 'TOPIC_LIST_EDIT_LABEL':
      return editLabel(state, action.payload.uuid, action.payload.label)

    case 'TOPIC_LIST_EDIT_TEXT':
      return editText(state, action.payload.uuid, action.payload.text)

    case 'TOPIC_LIST_ADD':
      return add(state, action.payload.label, action.payload.text)

    case 'TOPIC_LIST_REMOVE':
      return remove(state, action.payload.uuid)

    case 'TOPIC_LIST_LOAD_TOPICS':
      return loadTopics(state, action.payload.topics)

    default:
      return state
  }
}
