import { loadStories, saveStories } from '../../handling'
import { store } from '../'
import { Dispatcher } from '../actions'


export default class AppActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {

  }


}
