import * as uuidv4 from 'uuid-v4'
import { Topic } from '../../../types'
import { changeProperty } from '../../utils'
import { ActionType } from '../actions'
export interface TopicsState {
  topics: Topic[]
}
const initialState: TopicsState = {
  topics: []
}

const editLabel = (_state: TopicsState, uuid: string, label: string): TopicsState => {
  return {
    topics: changeProperty(_state.topics, uuid, 'label', label)
  }
}

const editText = (_state: TopicsState, uuid: string, text: string): TopicsState => {
  return {
    topics: changeProperty(_state.topics, uuid, 'text', text)
  }
}

const add = (_state: TopicsState, label: string, text: string): TopicsState => {
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

const remove = (_state: TopicsState, uuid: string): TopicsState => {
  return {
    ..._state,
    topics: _state.topics.filter(topic => topic.uuid !== uuid)
  }
}

const loadTopics = (_state: TopicsState, topics: any[]): TopicsState => {
  return {
    ..._state,
    topics
  }
}

export default function TopicsReducer(state: TopicsState = initialState, action: ActionType): TopicsState {
  switch (action.type) {
    case 'TOPICS_EDIT_LABEL':
      return editLabel(state, action.payload.uuid, action.payload.label)

    case 'TOPICS_EDIT_TEXT':
      return editText(state, action.payload.uuid, action.payload.text)

    case 'TOPICS_ADD':
      return add(state, action.payload.label, action.payload.text)

    case 'TOPICS_REMOVE':
      return remove(state, action.payload.uuid)

    case 'TOPICS_LOAD_TOPICS':
      return loadTopics(state, action.payload.topics)

    default:
      return state
  }
}
