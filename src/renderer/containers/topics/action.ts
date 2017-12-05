import * as assert from 'assert'

import { store } from '../../'
import { repositories } from '../../../repository'
import { TopicsDispatchAction } from '../actions'

export class TopicsAction extends TopicsDispatchAction {
  private _prev = null
  public _first() {
    this._dispatch.topics.loadTopics(repositories.topic.get())

    store.subscribe(() => {
      const state = store.getState()
      if (this._prev && this._prev.topics !== state.topics) {
        repositories.topic.allUpdate(state.topics.topics)
      }
      this._prev = state
    })
  }

  public startRef(uuid: string) {
    this._dispatch.app.open(0, 'topic', uuid)
  }
}
