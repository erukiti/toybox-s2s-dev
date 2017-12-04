import * as assert from 'assert'

import { store } from '../../'
import { TopicListDispatchAction } from '../actions'

export class TopicListAction extends TopicListDispatchAction {
  public _first() {
    // this.topicList.loadTopics(loadTopics('_'))
  }

  public startRef(uuid: string) {
    const state = store.getState()
    const topic = state.topicList.topics.find(topic2 => topic2.uuid === uuid)
    assert(topic)
    this._dispatch.topicReference.start(topic.uuid, topic.label, topic.text)
    this._dispatch.app.changeMode('topic')
  }
}
