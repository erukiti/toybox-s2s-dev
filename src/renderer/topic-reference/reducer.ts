import { ActionType } from '../actions'
import { Topic } from '../types'
export type TopicReferenceState = {
  uuid: string,
  label: string,
  text: string
}
const initialState: TopicReferenceState = {
  uuid: '',
  label: '',
  text: ''
}

const start = (_state: TopicReferenceState, uuid: string, label: string, text: string): TopicReferenceState => {
  return {
    uuid,
    label,
    text
  }
}

const editLabel = (_state: TopicReferenceState, label: string): TopicReferenceState => {
  return {
    ..._state,
    label
  }
}

const editText = (_state: TopicReferenceState, text: string): TopicReferenceState => {
  return {
    ..._state,
    text
  }
}

export default function TopicReferenceReducer(
  state: TopicReferenceState = initialState,
  action: ActionType
): TopicReferenceState {
  switch (action.type) {
    case 'TOPIC_REFERENCE_START':
      return start(state, action.payload.uuid, action.payload.label, action.payload.text)

    case 'TOPIC_REFERENCE_EDIT_LABEL':
      return editLabel(state, action.payload.label)

    case 'TOPIC_REFERENCE_EDIT_TEXT':
      return editText(state, action.payload.text)

    default:
      return state
  }
}
