// GENERATED! DON'T TOUCH ME!
import { combineReducers } from 'redux'

import appReducer, { AppState } from './app/reducer'
import doneListReducer, { DoneListState } from './done-list/reducer'
import taskReferenceReducer, { TaskReferenceState } from './task-reference/reducer'
import topicListReducer, { TopicListState } from './topic-list/reducer'
import topicReferenceReducer, { TopicReferenceState } from './topic-reference/reducer'
import workingReducer, { WorkingState } from './working/reducer'

export interface State {
  app: AppState
  doneList: DoneListState
  taskReference: TaskReferenceState
  topicList: TopicListState
  topicReference: TopicReferenceState
  working: WorkingState
}

export default combineReducers<State>({
  app: appReducer,
  doneList: doneListReducer,
  taskReference: taskReferenceReducer,
  topicList: topicListReducer,
  topicReference: topicReferenceReducer,
  working: workingReducer
})
