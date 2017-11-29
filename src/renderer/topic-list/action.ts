const assert = require('assert')

import { store } from '..'
import { loadTopics, saveTopics } from '../../handling'
import { Dispatcher } from '../actions'

export default class TopicListActionCreator {
  private _dispatch: Dispatcher

  constructor(dispatch: Dispatcher) {
    this._dispatch = dispatch
  }
  public _first() {
    this._dispatch.topicList.loadTopics(loadTopics('_'))
  }

  public newTopic() {
    this._dispatch.topicList.newTopic()
  }

  public editLabel(label: string) {
    this._dispatch.topicList.editLabel(label)
  }

  public done() {
    this._dispatch.topicList.done()
    saveTopics('_', store.getState().topicList.topics)
  }

  public cancel() {
    this._dispatch.topicList.cancel()
  }

  public remove(uuid: string) {
    this._dispatch.topicList.remove(uuid)
  }

  public startRef(uuid: string) {
    const state = store.getState()
    const topic = state.topicList.topics.find(topic2 => topic2.uuid === uuid)
    assert(topic)
    this._dispatch.topicReference.start(topic.uuid, topic.label, topic.text)
    this._dispatch.app.changeMode('topic')
  }
}
