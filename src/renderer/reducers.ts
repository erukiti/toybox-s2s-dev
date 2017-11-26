// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import sandboxReducer, { SandboxState } from './sandbox/reducer'
import storiesReducer, { StoriesState } from './stories/reducer'
import storyReducer, { StoryState } from './story/reducer'
import topicListReducer, { TopicListState } from './topic-list/reducer'
import topicReferenceReducer, { TopicReferenceState } from './topic-reference/reducer'

export interface State {
  app: AppState
  sandbox: SandboxState
  stories: StoriesState
  story: StoryState
  topicList: TopicListState
  topicReference: TopicReferenceState
}

export default combineReducers<State>({
  app: appReducer,
  sandbox: sandboxReducer,
  stories: storiesReducer,
  story: storyReducer,
  topicList: topicListReducer,
  topicReference: topicReferenceReducer
})
