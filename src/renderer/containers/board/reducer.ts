import * as assert from 'assert'

const uuidv4 = require('uuid-v4')

import { Board } from '../../../types'
import { changeProperty } from '../../utils'
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

const create = (_state: BoardState, board: any): BoardState => {
  const uuid = uuidv4()
  assert(!_state.boards.find(v => v.uuid === uuid))
  return {
    boards: [..._state.boards, board]
  }
}

const editLabel = (_state: BoardState, uuid: string, label: string): BoardState => {
  return {
    boards: changeProperty(_state.boards, uuid, 'label', label)
  }
}

const changeTopicsIds = (_state: BoardState, uuid: string, topicId: string): BoardState => {
  const topicIds = _state.boards.find(v => v.uuid === uuid).topicIds

  return {
    boards: changeProperty(_state.boards, uuid, 'topicIds', topicIds)
  }
}

export default function BoardReducer(state: BoardState = initialState, action: ActionType): BoardState {
  switch (action.type) {
    case 'BOARD_LOAD':
      return load(state, action.payload.boards)

    case 'BOARD_CREATE':
      return create(state, action.payload.board)

    case 'BOARD_EDIT_LABEL':
      return editLabel(state, action.payload.uuid, action.payload.label)

    case 'BOARD_CHANGE_TOPICS_IDS':
      return changeTopicsIds(state, action.payload.uuid, action.payload.topicId)

    default:
      return state
  }
}
