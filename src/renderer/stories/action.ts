const assert = require('assert')

import { loadStories, saveStories } from '../../handling'
import { store } from '../'
import { Dispatcher } from '../actions'


export default class StoriesActionCreator {
  _dispatch: Dispatcher

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {
    const state = store.getState()
    this._dispatch.stories.load(loadStories('_'))
  }

  add() {
    this._dispatch.stories.add()
    const { stories } = store.getState().stories
    const { uuid } = stories[stories.length - 1]
    this.refStory(uuid)
  }

  refStory(uuid: string) {
    const story = store.getState().stories.stories.find(story => story.uuid === uuid)
    assert(story)
    this._dispatch.story.start(story.uuid)
    this._dispatch.app.changeMode('story')
  }
}
