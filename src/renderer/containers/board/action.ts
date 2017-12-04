import { repositories } from '../../../repository'
import { BoardDispatchAction } from '../actions'

export class BoardAction extends BoardDispatchAction {
  public _first() {
    this._dispatch.board.load(repositories.board.get())
  }
}
