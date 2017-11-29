import { store } from '../'
import { loadStories, saveStories } from '../../handling'
import { Dispatcher } from '../actions'

export default class AppActionCreator {
  public _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  public _first() {}
}
