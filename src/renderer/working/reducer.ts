import { ActionType } from '../actions'
type Task = {
  desc: string,
  memo: string,
  topicId: string
}
export type WorkingState = {
  desc: string,
  memo: string,
  topicId?: string,
  doneTasks: Task[]
}
const initialState: WorkingState = {
  desc: '',
  memo: '',
  topicId: null,
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

const changeTopicId = (_state: WorkingState, topicId: string): WorkingState => {
  return {
    ..._state,
    topicId
  }
}

const done = (_state: WorkingState): WorkingState => {
  const task: Task = {
    desc: _state.desc,
    memo: _state.memo,
    topicId: _state.topicId
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
      return editDesc(state, action.desc)

    case 'WORKING_EDIT_MEMO':
      return editMemo(state, action.memo)

    case 'WORKING_CHANGE_TOPIC_ID':
      return changeTopicId(state, action.topicId)

    case 'WORKING_DONE':
      return done(state)

    case 'WORKING_LOAD_DONE_TASKS':
      return loadDoneTasks(state, action.doneTasks)

    default:
      return state
  }
}
