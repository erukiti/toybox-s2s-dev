import { ActionType } from '../actions'
type Task = {
  desc: string,
  memo: string,
  topicIds: string[]
}
export type WorkingState = {
  desc: string,
  memo: string,
  topicIds: string[],
  doneTasks: Task[]
}
const initialState: WorkingState = {
  desc: '',
  memo: '',
  topicIds: [],
  doneTasks: []
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

const done = (_state: WorkingState): WorkingState => {
  const task: Task = {
    desc: _state.desc,
    memo: _state.memo,
    topicIds: _state.topicIds
  }
  const doneTasks: Task[] = [..._state.doneTasks, task]
  return {
    ..._state,
    desc: '',
    memo: '',
    doneTasks
  }
}

const loadDoneTasks = (_state: WorkingState, doneTasks: any[]): WorkingState => {
  return {
    ..._state,
    doneTasks
  }
}

export default function WorkingReducer(state: WorkingState = initialState, action: ActionType): WorkingState {
  switch (action.type) {
    case 'WORKING_EDIT_DESC':
      return editDesc(state, action.payload.desc)

    case 'WORKING_EDIT_MEMO':
      return editMemo(state, action.payload.memo)

    case 'WORKING_CHECK_TOPIC_ID':
      return checkTopicId(state, action.payload.topicId)

    case 'WORKING_DONE':
      return done(state)

    case 'WORKING_LOAD_DONE_TASKS':
      return loadDoneTasks(state, action.payload.doneTasks)

    default:
      return state
  }
}
