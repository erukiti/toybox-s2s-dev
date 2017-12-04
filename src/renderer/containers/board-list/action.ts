import { store } from '../../'
import { repositories } from '../../../repository'
import { BoardListDispatchAction } from '../actions'

export class BoardListAction extends BoardListDispatchAction {
  public _first() {
    this._dispatch.boardList.load(repositories.board.get())
  }
}
