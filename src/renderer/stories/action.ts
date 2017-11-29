const assert = require('assert')

import { store } from '../'
import { loadStories, saveStories } from '../../handling'
import { Dispatcher } from '../actions'

export default class StoriesActionCreator {
  public _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  public _first() {
    const state = store.getState()
    this._dispatch.stories.load(loadStories('_'))
  }

  public add() {
    this._dispatch.stories.add()
    const { stories } = store.getState().stories
    const { uuid } = stories[stories.length - 1]
    this.refStory(uuid)
  }

  public refStory(uuid: string) {
    const story = store.getState().stories.stories.find(story2 => story2.uuid === uuid)
    assert(story)
    this._dispatch.story.start(story.uuid)
    this._dispatch.app.changeMode('story')
  }
}
