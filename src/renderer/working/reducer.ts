import { ActionType } from '../actions'
import { Task } from '../types'
export type WorkingState = {
  desc: string,
  memo: string,
  topicIds: string[]
}
const initialState: WorkingState = {
  desc: '',
  memo: '',
  topicIds: []
}

const editDesc = (_state: WorkingState, desc: string): WorkingState => {
  return {
    ..._state,
    desc
  }
}

const editMemo = (_state: WorkingState, memo: string): WorkingState => {
  return {
    ..._state,
    memo
  }
}

const checkTopicId = (_state: WorkingState, topicId: string): WorkingState => {
  let topicIds

  if (_state.topicIds.includes(topicId)) {
    topicIds = _state.topicIds.filter(id => id !== topicId)
  } else {
    topicIds = [..._state.topicIds, topicId]
  }

  return {
    ..._state,
    topicIds
  }
}

const clear = (_state: WorkingState): WorkingState => initialState

export default function WorkingReducer(state: WorkingState = initialState, action: ActionType): WorkingState {
  switch (action.type) {
    case 'WORKING_EDIT_DESC':
      return editDesc(state, action.payload.desc)

    case 'WORKING_EDIT_MEMO':
      return editMemo(state, action.payload.memo)

    case 'WORKING_CHECK_TOPIC_ID':
      return checkTopicId(state, action.payload.topicId)

    case 'WORKING_CLEAR':
      return clear(state)

    default:
      return state
  }
}
