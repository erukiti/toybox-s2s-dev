import * as assert from 'assert'
const uuidv4 = require('uuid-v4')

import { store } from '../../'
import { repositories } from '../../../repository'
import { Board } from '../../../types'
import { BoardDispatchAction } from '../actions'

export class BoardAction extends BoardDispatchAction {
  public _first() {
    this._dispatch.board.load(repositories.board.get())
  }

  public create() {
    const board: Board = {
      uuid: uuidv4(),
      rev: '',
      label: '',
      createdAt: 0,
      updatedAt: 0,
      topicIds: [],
      items: []
    }
    this._dispatch.board.create(board)
    this._dispatch.app.open(0, 'board', board.uuid)
  }

  public startRef(uuid: string) {
    this._dispatch.app.open(0, 'board', uuid)
  }
}
