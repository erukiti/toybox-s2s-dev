import { store } from '../'
import { saveStories } from '../../handling'
import { Dispatcher } from '../actions'

export default class StoryActionCreator {
  public _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  public _first() {}

  public editDesc(desc: string) {
    const { uuid } = store.getState().story
    this._dispatch.stories.updateDesc(uuid, desc)
    saveStories('_', store.getState().stories.stories)
  }

  public editMemo(memo: string) {
    const { uuid } = store.getState().story
    this._dispatch.stories.updateMemo(uuid, memo)
    saveStories('_', store.getState().stories.stories)
  }

  public checkTopicId(topicId: string) {
    const { uuid } = store.getState().story
    this._dispatch.stories.changeTopicId(uuid, topicId)
    saveStories('_', store.getState().stories.stories)
  }
}
