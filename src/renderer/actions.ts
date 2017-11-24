// GENERATED! DON'T TOUCH ME!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
{ type: 'TOPIC_LIST_NEW_TOPIC', payload: {}, } |
{ type: 'TOPIC_LIST_EDIT_LABEL', payload: {label: string}, } |
{ type: 'TOPIC_LIST_EDIT_TEXT', payload: {text: string}, } |
{ type: 'TOPIC_LIST_DONE', payload: {}, } |
{ type: 'TOPIC_LIST_CANCEL', payload: {}, } |
{ type: 'TOPIC_LIST_REMOVE', payload: {uuid: string}, } |
{ type: 'TOPIC_LIST_LOAD_TOPICS', payload: {topics: any[]}, } |
{ type: 'WORKING_EDIT_DESC', payload: {desc: string}, } |
{ type: 'WORKING_EDIT_MEMO', payload: {memo: string}, } |
{ type: 'WORKING_CHECK_TOPIC_ID', payload: {topicId: string}, } |
{ type: 'WORKING_DONE', payload: {}, } |
{ type: 'WORKING_LOAD_DONE_TASKS', payload: {doneTasks: any[]}, }

export class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

  topicList: {
    newTopic: () => void,
    editLabel: (label: string) => void,
    editText: (text: string) => void,
    done: () => void,
    cancel: () => void,
    remove: (uuid: string) => void,
    loadTopics: (topics: any[]) => void
  }
  working: {
    editDesc: (desc: string) => void,
    editMemo: (memo: string) => void,
    checkTopicId: (topicId: string) => void,
    done: () => void,
    loadDoneTasks: (doneTasks: any[]) => void
  }

  constructor() {
    this.topicList = {
      newTopic: () => this._dispatch({type: 'TOPIC_LIST_NEW_TOPIC', payload: {}}),
      editLabel: (label: string) => this._dispatch({type: 'TOPIC_LIST_EDIT_LABEL', payload: {label}}),
      editText: (text: string) => this._dispatch({type: 'TOPIC_LIST_EDIT_TEXT', payload: {text}}),
      done: () => this._dispatch({type: 'TOPIC_LIST_DONE', payload: {}}),
      cancel: () => this._dispatch({type: 'TOPIC_LIST_CANCEL', payload: {}}),
      remove: (uuid: string) => this._dispatch({type: 'TOPIC_LIST_REMOVE', payload: {uuid}}),
      loadTopics: (topics: any[]) => this._dispatch({type: 'TOPIC_LIST_LOAD_TOPICS', payload: {topics}})
    },
    this.working = {
      editDesc: (desc: string) => this._dispatch({type: 'WORKING_EDIT_DESC', payload: {desc}}),
      editMemo: (memo: string) => this._dispatch({type: 'WORKING_EDIT_MEMO', payload: {memo}}),
      checkTopicId: (topicId: string) => this._dispatch({type: 'WORKING_CHECK_TOPIC_ID', payload: {topicId}}),
      done: () => this._dispatch({type: 'WORKING_DONE', payload: {}}),
      loadDoneTasks: (doneTasks: any[]) => this._dispatch({type: 'WORKING_LOAD_DONE_TASKS', payload: {doneTasks}})
    }
  }

  setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }
}
