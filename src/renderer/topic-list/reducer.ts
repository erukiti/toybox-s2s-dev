import { ActionType } from '../actions'
import * as uuidv4 from 'uuid-v4'
type Topic = {
  label: string,
  text: string,
  uuid: string
}
export type TopicListState = {
  topics: Topic[],
  editing?: Topic
}
const initialState: TopicListState = {
  topics: [],
  editing: null
}

const newTopic = (_state: TopicListState): TopicListState => {
  const topic = {
    label: '',
    text: '',
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

const editText = (_state: TopicListState, text: string): TopicListState => {
  const topic = {
    ..._state.editing,
    text
  }
  return {
    ..._state,
    editing: topic
  }
}

const done = (_state: TopicListState): TopicListState => {
  const topics = [..._state.topics.filter(topic => topic.uuid !== _state.editing.uuid), _state.editing]
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

export default function TopicListReducer(state: TopicListState = initialState, action: ActionType): TopicListState {
  switch (action.type) {
    case 'TOPIC_LIST_NEW_TOPIC':
      return newTopic(state)

    case 'TOPIC_LIST_EDIT_LABEL':
      return editLabel(state, action.label)

    case 'TOPIC_LIST_EDIT_TEXT':
      return editText(state, action.text)

    case 'TOPIC_LIST_DONE':
      return done(state)

    case 'TOPIC_LIST_CANCEL':
      return cancel(state)

    case 'TOPIC_LIST_REMOVE':
      return remove(state, action.uuid)

    default:
      return state
  }
}
