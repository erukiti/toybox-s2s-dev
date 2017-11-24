import { store } from '..'
import { loadTopics, saveTopics } from '../../handling'
import { Dispatcher } from '../actions'

export default class TopicListActionCreator {
  private _dispatch: Dispatcher

  constructor(dispatch: Dispatcher) {
    this._dispatch = dispatch
  }
  _first() {
    this._dispatch.topicList.loadTopics(loadTopics('_'))
  }

  newTopic() {
    this._dispatch.topicList.newTopic()
  }

  editLabel(label: string) {
    this._dispatch.topicList.editLabel(label)
  }

  editText(text: string) {
    this._dispatch.topicList.editText(text)
  }

  done() {
    this._dispatch.topicList.done()
    saveTopics('_', store.getState().topicList.topics)
  }

  cancel() {
    this._dispatch.topicList.cancel()
  }

  remove(uuid: string) {
    this._dispatch.topicList.remove(uuid)
  }
}
