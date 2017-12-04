import { ActionType } from '../actions'
export interface TopicAddState {
  label: string
  text: string
}
const initialState: TopicAddState = {
  label: '',
  text: ''
}

const editLabel = (_state: TopicAddState, label: string): TopicAddState => {
  return {
    ..._state,
    label
  }
}

const editText = (_state: TopicAddState, text: string): TopicAddState => {
  return {
    ..._state,
    text
  }
}

const clear = (_state: TopicAddState): TopicAddState => {
  return initialState
}

export default function TopicAddReducer(state: TopicAddState = initialState, action: ActionType): TopicAddState {
  switch (action.type) {
    case 'TOPIC_ADD_EDIT_LABEL':
      return editLabel(state, action.payload.label)

    case 'TOPIC_ADD_EDIT_TEXT':
      return editText(state, action.payload.text)

    case 'TOPIC_ADD_CLEAR':
      return clear(state)

    default:
      return state
  }
}
