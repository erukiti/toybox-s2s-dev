import { ActionType } from '../actions'
import { Task } from '../types'

const uuidv4 = require('uuid-v4')

export type DoneListState = {
  tasks: Task[]
}
const initialState: DoneListState = {
  tasks: []
}

const add = (_state: DoneListState, desc: string, memo: string, topicIds: string[]): DoneListState => {
  const task: Task = {
    desc,
    memo,
    topicIds,
    uuid: uuidv4(),
    createAt: new Date(),
    modifiedAt: new Date()
  }
  const tasks: Task[] = [..._state.tasks, task]
  return {
    ..._state,
    tasks
  }
}

const load = (_state: DoneListState, tasks: any[]): DoneListState => {
  return {
    ..._state,
    tasks
  }
}

const updateDesc = (_state: DoneListState, uuid: string, desc: string): DoneListState => {
  const tasks = _state.tasks.map(task => {
    if (task.uuid !== uuid) {
      return task
    } else {
      return {
        ...task,
        desc
      }
    }
  })

  return {
    ..._state,
    tasks
  }
}

const updateMemo = (_state: DoneListState, uuid: string, memo: string): DoneListState => {
  const tasks = _state.tasks.map(task => {
    if (task.uuid !== uuid) {
      return task
    } else {
      return {
        ...task,
        memo
      }
    }
  })

  return {
    ..._state,
    tasks
  }
}

export default function DoneListReducer(state: DoneListState = initialState, action: ActionType): DoneListState {
  switch (action.type) {
    case 'DONE_LIST_ADD':
      return add(state, action.payload.desc, action.payload.memo, action.payload.topicIds)

    case 'DONE_LIST_LOAD':
      return load(state, action.payload.tasks)

    case 'DONE_LIST_UPDATE_DESC':
      return updateDesc(state, action.payload.uuid, action.payload.desc)

    case 'DONE_LIST_UPDATE_MEMO':
      return updateMemo(state, action.payload.uuid, action.payload.memo)

    default:
      return state
  }
}
