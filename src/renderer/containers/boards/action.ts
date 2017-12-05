import * as assert from 'assert'
const uuidv4 = require('uuid-v4')

import { store } from '../../'
import { repositories } from '../../../repository'
import { Board } from '../../../types'
import { BoardsDispatchAction } from '../actions'

export class BoardsAction extends BoardsDispatchAction {
  private _prev = null
  public _first() {
    this._dispatch.boards.load(repositories.board.get())
    store.subscribe(() => {
      const state = store.getState()
      if (this._prev && this._prev.boards !== state.boards) {
        repositories.board.allUpdate(state.boards.boards)
      }

      this._prev = state
    })
  }

  public create() {
    const board: Board = {
      uuid: uuidv4(),
      rev: '',
      label: '',
      createdAt: 0,
      updatedAt: 0,
      topicIds: [],
      itemIds: []
    }
    this._dispatch.boards.create(board)
    this._dispatch.app.open(0, 'board', board.uuid)
  }

  public startRef(uuid: string) {
    this._dispatch.app.open(0, 'board', uuid)
  }
}
