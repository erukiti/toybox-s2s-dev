import { saveDoneTasks } from '../../handling'
import { store } from '../'
import { Dispatcher } from '../actions'

export default class TaskReferenceActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {

  }

  editDesc(desc: string) {
    const { uuid } = store.getState().taskReference
    this._dispatch.taskReference.editDesc(desc)
    this._dispatch.doneList.updateDesc(uuid, desc)
    saveDoneTasks('_', store.getState().doneList.tasks)
  }

  editMemo(memo: string) {
    const { uuid } = store.getState().taskReference
    this._dispatch.taskReference.editMemo(memo)
    this._dispatch.doneList.updateMemo(uuid, memo)
    saveDoneTasks('_', store.getState().doneList.tasks)
  }
}
