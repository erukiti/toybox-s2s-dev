// GENERATED!!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import topicListReducer, { TopicListState } from './topic-list/reducer'
import workingReducer, { WorkingState } from './working/reducer'

export default combineReducers({
  app: appReducer,
  topicList: topicListReducer,
  working: workingReducer
})

export interface State {
  app: AppState
  topicList: TopicListState
  working: WorkingState
}
