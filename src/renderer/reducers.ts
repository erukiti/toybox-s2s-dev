// GENERATED!!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import topicListReducer, { TopicListState } from './topic-list/reducer'

export default combineReducers({
  app: appReducer,
  topicList: topicListReducer
})

export interface State {
  app: AppState
  topicList: TopicListState
}
