import { store } from '../'
import { saveTopics } from '../../handling'
import { Dispatcher } from '../actions'

export default class TopicReferenceActionCreator {
  public _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  public _first() {}

  public editLabel(label: string) {
    const { uuid } = store.getState().topicReference
    this._dispatch.topicReference.editLabel(label)
    this._dispatch.topicList.updateLabel(uuid, label)
    saveTopics('_', store.getState().topicList.topics)
  }

  public editText(text: string) {
    const { uuid } = store.getState().topicReference
    this._dispatch.topicReference.editText(text)
    this._dispatch.topicList.updateText(uuid, text)
    saveTopics('_', store.getState().topicList.topics)
  }
}
