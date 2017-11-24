import { loadDoneTasks, saveDoneTasks } from '../../handling'
import { store } from '../'
import { Dispatcher } from '../actions'

export default class WorkingActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {
    const state = store.getState()
    this._dispatch.working.loadDoneTasks(loadDoneTasks('_'))
  }

  editDesc(desc: string) {
    this._dispatch.working.editDesc(desc)
  }

  editMemo(memo: string) {
    this._dispatch.working.editMemo(memo)
  }

  checkTopicId(topicId: string) {
    this._dispatch.working.checkTopicId(topicId)
  }
  done() {
    this._dispatch.working.done()
    const state = store.getState()
    saveDoneTasks('_', state.working.doneTasks)
  }
}
