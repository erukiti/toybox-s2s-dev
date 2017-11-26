const assert = require('assert')

import { loadDoneTasks, saveDoneTasks } from '../../handling'
import { store } from '../'
import { Dispatcher } from '../actions'


export default class DoneListActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {
    const state = store.getState()
    this._dispatch.doneList.load(loadDoneTasks('_'))
  }

  refTask(uuid: string) {
    const state = store.getState()
    const task = state.doneList.tasks.find(task => task.uuid === uuid)
    assert(task)
    this._dispatch.taskReference.start(task.uuid, task.desc, task.memo, task.topicIds)
    this._dispatch.app.changeMode('task')
  }
}
