import { loadDoneTasks, saveDoneTasks } from '../../handling'
import { store } from '../'
import { Dispatcher } from '../actions'

export default class WorkingActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {
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
    const state = store.getState()
    this._dispatch.doneList.add(state.working.desc, state.working.memo, state.working.topicIds)
    this._dispatch.working.clear()
    saveDoneTasks('_', state.doneList.tasks)
  }
}
