import { saveStories } from '../../handling'
import { store } from '../'
import { Dispatcher } from '../actions'

export default class StoryActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {

  }

  editDesc(desc: string) {
    const { uuid } = store.getState().story
    this._dispatch.stories.updateDesc(uuid, desc)
    saveStories('_', store.getState().stories.stories)
  }

  editMemo(memo: string) {
    const { uuid } = store.getState().story
    this._dispatch.stories.updateMemo(uuid, memo)
    saveStories('_', store.getState().stories.stories)
  }

  checkTopicId(topicId: string) {
    const { uuid } = store.getState().story
    this._dispatch.stories.changeTopicId(uuid, topicId)
    saveStories('_', store.getState().stories.stories)
  }

}
