// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import boardListReducer, { BoardListState } from './board-list/reducer'
import boardReducer, { BoardState } from './board/reducer'
import itemTextReducer, { ItemTextState } from './item-text/reducer'
import sandboxReducer, { SandboxState } from './sandbox/reducer'
import topicListReducer, { TopicListState } from './topic-list/reducer'
import topicReferenceReducer, { TopicReferenceState } from './topic-reference/reducer'

export interface State {
  app: AppState
  boardList: BoardListState
  board: BoardState
  itemText: ItemTextState
  sandbox: SandboxState
  topicList: TopicListState
  topicReference: TopicReferenceState
}

export default combineReducers<State>({
  app: appReducer,
  boardList: boardListReducer,
  board: boardReducer,
  itemText: itemTextReducer,
  sandbox: sandboxReducer,
  topicList: topicListReducer,
  topicReference: topicReferenceReducer
})
