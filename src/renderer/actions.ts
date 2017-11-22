// GENERATED!!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
{ type: 'APP_ADD', payload: {count: number}, } |
{ type: 'APP_SUB', payload: {count: number}, } |
{ type: 'TOPIC_LIST_NEW_TOPIC', payload: {}, } |
{ type: 'TOPIC_LIST_EDIT_LABEL', payload: {label: string}, } |
{ type: 'TOPIC_LIST_EDIT_TEXT', payload: {text: string}, } |
{ type: 'TOPIC_LIST_DONE', payload: {}, } |
{ type: 'TOPIC_LIST_CANCEL', payload: {}, } |
{ type: 'TOPIC_LIST_REMOVE', payload: {uuid: string}, } |
{ type: 'TOPIC_LIST_LOAD_TOPICS', payload: {topics: any[]}, } |
{ type: 'WORKING_EDIT_DESC', payload: {desc: string}, } |
{ type: 'WORKING_EDIT_MEMO', payload: {memo: string}, } |
{ type: 'WORKING_CHANGE_TOPIC_ID', payload: {topicId: string}, } |
{ type: 'WORKING_DONE', payload: {}, } |
{ type: 'WORKING_LOAD_DONE_TASKS', payload: {doneTasks: any[]}, }

export const dispatcher = dispatch => {
  return {
    app: {
      add: (count: number) => dispatch({type: 'APP_ADD', payload: {count}}),
      sub: (count: number) => dispatch({type: 'APP_SUB', payload: {count}})
    },
    topicList: {
      newTopic: () => dispatch({type: 'TOPIC_LIST_NEW_TOPIC', payload: {}}),
      editLabel: (label: string) => dispatch({type: 'TOPIC_LIST_EDIT_LABEL', payload: {label}}),
      editText: (text: string) => dispatch({type: 'TOPIC_LIST_EDIT_TEXT', payload: {text}}),
      done: () => dispatch({type: 'TOPIC_LIST_DONE', payload: {}}),
      cancel: () => dispatch({type: 'TOPIC_LIST_CANCEL', payload: {}}),
      remove: (uuid: string) => dispatch({type: 'TOPIC_LIST_REMOVE', payload: {uuid}}),
      loadTopics: (topics: any[]) => dispatch({type: 'TOPIC_LIST_LOAD_TOPICS', payload: {topics}})
    },
    working: {
      editDesc: (desc: string) => dispatch({type: 'WORKING_EDIT_DESC', payload: {desc}}),
      editMemo: (memo: string) => dispatch({type: 'WORKING_EDIT_MEMO', payload: {memo}}),
      changeTopicId: (topicId: string) => dispatch({type: 'WORKING_CHANGE_TOPIC_ID', payload: {topicId}}),
      done: () => dispatch({type: 'WORKING_DONE', payload: {}}),
      loadDoneTasks: (doneTasks: any[]) => dispatch({type: 'WORKING_LOAD_DONE_TASKS', payload: {doneTasks}})
    }
  }
}
