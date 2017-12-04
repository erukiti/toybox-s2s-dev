import * as assert from 'assert'

import { store } from '../../'
import { repositories } from '../../../repository'
import { TopicListDispatchAction } from '../actions'

export class TopicListAction extends TopicListDispatchAction {
  public _first() {
    this._dispatch.topicList.loadTopics(repositories.topic.get())
  }

  public startRef(uuid: string) {
    this._dispatch.app.open(0, 'topic', uuid)
  }
}
