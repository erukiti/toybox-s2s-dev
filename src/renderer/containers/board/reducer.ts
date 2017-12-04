import * as assert from 'assert'

const uuidv4 = require('uuid-v4')

import { Board } from '../../../types'
import { ActionType } from '../actions'
export interface BoardState {
  boards: Board[]
}
const initialState: BoardState = {
  boards: []
}

const load = (_state: BoardState, boards: any[]): BoardState => {
  return {
    boards
  }
}

const create = (_state: BoardState): BoardState => {
  const uuid = uuidv4()
  assert(!_state.boards.find(v => v.uuid === uuid))
  const board: Board = {
    uuid,
    rev: '',
    label: '',
    createdAt: 0,
    updatedAt: 0,
    topicIds: [],
    items: []
  }
  return {
    boards: [..._state.boards, board]
  }
}

export default function BoardReducer(state: BoardState = initialState, action: ActionType): BoardState {
  switch (action.type) {
    case 'BOARD_LOAD':
      return load(state, action.payload.boards)

    case 'BOARD_CREATE':
      return create(state)

    default:
      return state
  }
}
