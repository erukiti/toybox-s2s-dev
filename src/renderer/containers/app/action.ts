import { AppDispatchAction } from '../actions'

export class AppAction extends AppDispatchAction {
  public _first() {
    console.log('app first')
    this._dispatch.app.addPane()
  }
}
