import { store } from '../'
import { Dispatcher } from '../actions'
import { saveTopics } from '../../handling'

export default class TopicReferenceActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {

  }

  editLabel(label: string) {
    const { uuid } = store.getState().topicReference
    this._dispatch.topicReference.editLabel(label)
    this._dispatch.topicList.updateLabel(uuid, label)
    saveTopics('_', store.getState().topicList.topics)
  }

  editText(text: string) {
    const { uuid } = store.getState().topicReference
    this._dispatch.topicReference.editText(text)
    this._dispatch.topicList.updateText(uuid, text)
    saveTopics('_', store.getState().topicList.topics)
  }
}
