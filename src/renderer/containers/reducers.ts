// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import boardReducer, { BoardState } from './board/reducer'
import itemTextReducer, { ItemTextState } from './item-text/reducer'
import sandboxReducer, { SandboxState } from './sandbox/reducer'
import topicAddReducer, { TopicAddState } from './topic-add/reducer'
import topicListReducer, { TopicListState } from './topic-list/reducer'

export interface State {
  app: AppState
  board: BoardState
  itemText: ItemTextState
  sandbox: SandboxState
  topicAdd: TopicAddState
  topicList: TopicListState
}

export default combineReducers<State>({
  app: appReducer,
  board: boardReducer,
  itemText: itemTextReducer,
  sandbox: sandboxReducer,
  topicAdd: topicAddReducer,
  topicList: topicListReducer
})
