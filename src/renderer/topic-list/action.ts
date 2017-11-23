import { store } from '..'
import { loadTopics, saveTopics } from '../../handling'

export default class TopicListActionCreator {
  _dispatch

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
