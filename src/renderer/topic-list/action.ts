const assert = require('assert')

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

  startRef(uuid: string) {
    const state = store.getState()
    const topic = state.topicList.topics.find(topic => topic.uuid === uuid)
    assert(topic)
    this._dispatch.topicReference.start(topic.uuid, topic.label, topic.text)
    this._dispatch.app.changeMode('topic')
  }
}
