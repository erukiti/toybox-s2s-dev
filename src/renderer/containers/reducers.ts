// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import boardsReducer, { BoardsState } from './boards/reducer'
import itemTextReducer, { ItemTextState } from './item-text/reducer'
import sandboxReducer, { SandboxState } from './sandbox/reducer'
import topicAddReducer, { TopicAddState } from './topic-add/reducer'
import topicsReducer, { TopicsState } from './topics/reducer'

export interface State {
  app: AppState
  boards: BoardsState
  itemText: ItemTextState
  sandbox: SandboxState
  topicAdd: TopicAddState
  topics: TopicsState
}

export default combineReducers<State>({
  app: appReducer,
  boards: boardsReducer,
  itemText: itemTextReducer,
  sandbox: sandboxReducer,
  topicAdd: topicAddReducer,
  topics: topicsReducer
})
