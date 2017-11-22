// GENERATED!!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
  { type: 'APP_ADD', count: number } |
  { type: 'APP_SUB', count: number } |
  { type: 'TOPIC_LIST_NEW_TOPIC',  } |
  { type: 'TOPIC_LIST_EDIT_LABEL', label: string } |
  { type: 'TOPIC_LIST_EDIT_TEXT', text: string } |
  { type: 'TOPIC_LIST_DONE',  } |
  { type: 'TOPIC_LIST_CANCEL',  } |
  { type: 'TOPIC_LIST_REMOVE', uuid: string } |
  { type: 'TOPIC_LIST_LOAD_TOPICS', topics: any[] } |
  { type: 'WORKING_EDIT_DESC', desc: string } |
  { type: 'WORKING_EDIT_MEMO', memo: string } |
  { type: 'WORKING_CHANGE_TOPIC_ID', topicId: string } |
  { type: 'WORKING_DONE',  } |
  { type: 'WORKING_LOAD_DONE_TASKS', doneTasks: any[] }

export const dispatcher = dispatch => {
  return {
    app: {
      add: (count: number) => dispatch({type: 'APP_ADD', count}),
      sub: (count: number) => dispatch({type: 'APP_SUB', count})
    },
    topicList: {
      newTopic: () => dispatch({type: 'TOPIC_LIST_NEW_TOPIC', }),
      editLabel: (label: string) => dispatch({type: 'TOPIC_LIST_EDIT_LABEL', label}),
      editText: (text: string) => dispatch({type: 'TOPIC_LIST_EDIT_TEXT', text}),
      done: () => dispatch({type: 'TOPIC_LIST_DONE', }),
      cancel: () => dispatch({type: 'TOPIC_LIST_CANCEL', }),
      remove: (uuid: string) => dispatch({type: 'TOPIC_LIST_REMOVE', uuid}),
      loadTopics: (topics: any[]) => dispatch({type: 'TOPIC_LIST_LOAD_TOPICS', topics})
    },
    working: {
      editDesc: (desc: string) => dispatch({type: 'WORKING_EDIT_DESC', desc}),
      editMemo: (memo: string) => dispatch({type: 'WORKING_EDIT_MEMO', memo}),
      changeTopicId: (topicId: string) => dispatch({type: 'WORKING_CHANGE_TOPIC_ID', topicId}),
      done: () => dispatch({type: 'WORKING_DONE', }),
      loadDoneTasks: (doneTasks: any[]) => dispatch({type: 'WORKING_LOAD_DONE_TASKS', doneTasks})
    }
  }
}
