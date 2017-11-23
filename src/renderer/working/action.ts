import { loadDoneTasks, saveDoneTasks } from '../../handling'
import { store } from '../'
import { dispatcher, ActionType } from '../actions'
import { Dispatch as ReduxDispatch } from 'redux'

export default class WorkingActionCreator {
  _dispatch

  _first() {
    const state = store.getState()
    this._dispatch.working.loadDoneTasks(loadDoneTasks('_'))
    if (state.topicList.topics.length > 0) {
      this._dispatch.working.changeTopicId(state.topicList.topics[0].uuid)
    }
  }

  editDesc(desc: string) {
    this._dispatch.working.editDesc(desc)
  }

  editMemo(memo: string) {
    this._dispatch.working.editMemo(memo)
  }

  changeTopicId(topicId: string) {
    this._dispatch.working.changeTopicId(topicId)
  }
  done() {
    const state = store.getState()

    if (state.working.topicId == null) {
      this._dispatch.working.changeTopicId(state.topicList.topics[0].uuid)
    }
    this._dispatch.working.done()
    saveDoneTasks('_', state.working.doneTasks)
  }
}
