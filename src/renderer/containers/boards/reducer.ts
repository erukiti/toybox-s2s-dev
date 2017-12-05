import * as assert from 'assert'

const uuidv4 = require('uuid-v4')

import { Board } from '../../../types'
import { changeProperty } from '../../utils'
import { ActionType } from '../actions'
export interface BoardsState {
  boards: Board[]
}
const initialState: BoardsState = {
  boards: []
}

const load = (_state: BoardsState, boards: any[]): BoardsState => {
  return {
    boards
  }
}

const create = (_state: BoardsState, board: any): BoardsState => {
  const uuid = uuidv4()
  assert(!_state.boards.find(v => v.uuid === uuid))
  return {
    boards: [..._state.boards, board]
  }
}

const editLabel = (_state: BoardsState, uuid: string, label: string): BoardsState => {
  return {
    boards: changeProperty(_state.boards, uuid, 'label', label)
  }
}

const changeTopicsIds = (_state: BoardsState, uuid: string, topicId: string): BoardsState => {
  const board = _state.boards.find(v => v.uuid === uuid)

  let topicIds

  if (board.topicIds.includes(topicId)) {
    topicIds = board.topicIds.filter(v => v !== topicId)
  } else {
    topicIds = [...board.topicIds, topicId]
  }

  return {
    boards: changeProperty(_state.boards, uuid, 'topicIds', topicIds)
  }
}

const addItem = (_state: BoardsState, uuid: string, itemId: string): BoardsState => {
  const itemIds = [..._state.boards.find(v => v.uuid === uuid).itemIds, itemId]
  return {
    boards: changeProperty(_state.boards, uuid, 'itemIds', itemIds)
  }
}

export default function BoardsReducer(state: BoardsState = initialState, action: ActionType): BoardsState {
  switch (action.type) {
    case 'BOARDS_LOAD':
      return load(state, action.payload.boards)

    case 'BOARDS_CREATE':
      return create(state, action.payload.board)

    case 'BOARDS_EDIT_LABEL':
      return editLabel(state, action.payload.uuid, action.payload.label)

    case 'BOARDS_CHANGE_TOPICS_IDS':
      return changeTopicsIds(state, action.payload.uuid, action.payload.topicId)

    case 'BOARDS_ADD_ITEM':
      return addItem(state, action.payload.uuid, action.payload.itemId)

    default:
      return state
  }
}
