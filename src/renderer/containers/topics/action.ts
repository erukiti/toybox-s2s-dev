import * as assert from 'assert'

import { store } from '../../'
import { repositories } from '../../../repository'
import { TopicsDispatchAction } from '../actions'

export class TopicsAction extends TopicsDispatchAction {
  public _first() {
    this._dispatch.topics.loadTopics(repositories.topic.get())
  }

  public startRef(uuid: string) {
    this._dispatch.app.open(0, 'topic', uuid)
  }
}
