import actions, { ActionType } from '../actions'

const initialState = {
  topics: []
}

export type TopicListState = typeof initialState

const add = (state: TopicListState, label: string, text: string) => {
  const newTopic = {label, text}
  return {topics: [...state.topics, newTopic]}
}

const remove = (state: TopicListState, index: number) => {
  return {topics: state.topics.filter((v, i) => i !== index)}
}

// generated
export default function appReducer(state: TopicListState = initialState, action: ActionType) {
  switch (action.type) {
    case actions.TOPIC_LIST_ADD: return add(state, action.label, action.text)
    case actions.TOPIC_LIST_REMOVE: return remove(state, action.index)
    default: return state
  }
}
