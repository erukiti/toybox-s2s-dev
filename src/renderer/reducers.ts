// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import topicListReducer, { TopicListState } from './topic-list/reducer'
import workingReducer, { WorkingState } from './working/reducer'

export interface State {
  app: AppState
  topicList: TopicListState
  working: WorkingState
}

export default combineReducers<State>({
  app: appReducer,
  topicList: topicListReducer,
  working: workingReducer
})
