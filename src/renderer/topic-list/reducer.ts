import { ActionType } from '../actions'
type Topics = {
  label: string,
  text: string
}
const initialState = {
  topics: []
}
export type TopicListState = typeof initialState

const add = (_state, label: string, text: string) => {
  const topic = {
    label,
    text
  }
  return {
    topics: [..._state.topics, topic]
  }
}

const remove = (_state, index: number) => {
  return _state.topics.filter((v, i) => i !== index)
}

export default function TopicListReducer(state: TopicListState = initialState, action: ActionType) {
  switch (action.type) {
    case 'TOPIC_LIST_ADD':
      return add(state, action.label, action.text)

    case 'TOPIC_LIST_REMOVE':
      return remove(state, action.index)

    default:
      return state
  }
}
