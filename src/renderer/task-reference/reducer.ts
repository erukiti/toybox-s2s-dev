import { ActionType } from '../actions'
import { Task } from '../types'
export type TaskReferenceState = {
  uuid: string,
  desc: string,
  memo: string,
  topicIds: string[]
}
const initialState: TaskReferenceState = {
  uuid: '',
  desc: '',
  memo: '',
  topicIds: []
}

const start = (
  _state: TaskReferenceState,
  uuid: string,
  desc: string,
  memo: string,
  topicIds: string[]
): TaskReferenceState => {
  return {
    uuid,
    desc,
    memo,
    topicIds
  }
}

const editDesc = (_state: TaskReferenceState, desc: string): TaskReferenceState => {
  return {
    ..._state,
    desc
  }
}

const editMemo = (_state: TaskReferenceState, memo: string): TaskReferenceState => {
  return {
    ..._state,
    memo
  }
}

export default function TaskReferenceReducer(
  state: TaskReferenceState = initialState,
  action: ActionType
): TaskReferenceState {
  switch (action.type) {
    case 'TASK_REFERENCE_START':
      return start(state, action.payload.uuid, action.payload.desc, action.payload.memo, action.payload.topicIds)

    case 'TASK_REFERENCE_EDIT_DESC':
      return editDesc(state, action.payload.desc)

    case 'TASK_REFERENCE_EDIT_MEMO':
      return editMemo(state, action.payload.memo)

    default:
      return state
  }
}
