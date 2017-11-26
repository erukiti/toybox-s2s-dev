// GENERATED! DON'T TOUCH ME!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
{ type: 'APP_CHANGE_MODE', payload: {mode: string}, } |
{ type: 'DONE_LIST_ADD', payload: {desc: string, memo: string, topicIds: string[]}, } |
{ type: 'DONE_LIST_LOAD', payload: {tasks: any[]}, } |
{ type: 'DONE_LIST_UPDATE_DESC', payload: {uuid: string, desc: string}, } |
{ type: 'DONE_LIST_UPDATE_MEMO', payload: {uuid: string, memo: string}, } |
{ type: 'TASK_REFERENCE_START', payload: {uuid: string, desc: string, memo: string, topicIds: string[]}, } |
{ type: 'TASK_REFERENCE_EDIT_DESC', payload: {desc: string}, } |
{ type: 'TASK_REFERENCE_EDIT_MEMO', payload: {memo: string}, } |
{ type: 'TOPIC_LIST_NEW_TOPIC', payload: {}, } |
{ type: 'TOPIC_LIST_EDIT_LABEL', payload: {label: string}, } |
{ type: 'TOPIC_LIST_DONE', payload: {}, } |
{ type: 'TOPIC_LIST_CANCEL', payload: {}, } |
{ type: 'TOPIC_LIST_REMOVE', payload: {uuid: string}, } |
{ type: 'TOPIC_LIST_LOAD_TOPICS', payload: {topics: any[]}, } |
{ type: 'TOPIC_LIST_UPDATE_LABEL', payload: {uuid: string, label: string}, } |
{ type: 'TOPIC_LIST_UPDATE_TEXT', payload: {uuid: string, text: string}, } |
{ type: 'TOPIC_REFERENCE_START', payload: {uuid: string, label: string, text: string}, } |
{ type: 'TOPIC_REFERENCE_EDIT_LABEL', payload: {label: string}, } |
{ type: 'TOPIC_REFERENCE_EDIT_TEXT', payload: {text: string}, } |
{ type: 'WORKING_EDIT_DESC', payload: {desc: string}, } |
{ type: 'WORKING_EDIT_MEMO', payload: {memo: string}, } |
{ type: 'WORKING_CHECK_TOPIC_ID', payload: {topicId: string}, } |
{ type: 'WORKING_CLEAR', payload: {}, }

export class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

  app: {
    changeMode: (mode: string) => void
  }
  doneList: {
    add: (desc: string, memo: string, topicIds: string[]) => void,
    load: (tasks: any[]) => void,
    updateDesc: (uuid: string, desc: string) => void,
    updateMemo: (uuid: string, memo: string) => void
  }
  taskReference: {
    start: (uuid: string, desc: string, memo: string, topicIds: string[]) => void,
    editDesc: (desc: string) => void,
    editMemo: (memo: string) => void
  }
  topicList: {
    newTopic: () => void,
    editLabel: (label: string) => void,
    done: () => void,
    cancel: () => void,
    remove: (uuid: string) => void,
    loadTopics: (topics: any[]) => void,
    updateLabel: (uuid: string, label: string) => void,
    updateText: (uuid: string, text: string) => void
  }
  topicReference: {
    start: (uuid: string, label: string, text: string) => void,
    editLabel: (label: string) => void,
    editText: (text: string) => void
  }
  working: {
    editDesc: (desc: string) => void,
    editMemo: (memo: string) => void,
    checkTopicId: (topicId: string) => void,
    clear: () => void
  }

  constructor() {
    this.app = {
      changeMode: (mode: string) => this._dispatch({type: 'APP_CHANGE_MODE', payload: {mode}})
    },
    this.doneList = {
      add: (desc: string, memo: string, topicIds: string[]) => this._dispatch({type: 'DONE_LIST_ADD', payload: {desc, memo, topicIds}}),
      load: (tasks: any[]) => this._dispatch({type: 'DONE_LIST_LOAD', payload: {tasks}}),
      updateDesc: (uuid: string, desc: string) => this._dispatch({type: 'DONE_LIST_UPDATE_DESC', payload: {uuid, desc}}),
      updateMemo: (uuid: string, memo: string) => this._dispatch({type: 'DONE_LIST_UPDATE_MEMO', payload: {uuid, memo}})
    },
    this.taskReference = {
      start: (uuid: string, desc: string, memo: string, topicIds: string[]) => this._dispatch({type: 'TASK_REFERENCE_START', payload: {uuid, desc, memo, topicIds}}),
      editDesc: (desc: string) => this._dispatch({type: 'TASK_REFERENCE_EDIT_DESC', payload: {desc}}),
      editMemo: (memo: string) => this._dispatch({type: 'TASK_REFERENCE_EDIT_MEMO', payload: {memo}})
    },
    this.topicList = {
      newTopic: () => this._dispatch({type: 'TOPIC_LIST_NEW_TOPIC', payload: {}}),
      editLabel: (label: string) => this._dispatch({type: 'TOPIC_LIST_EDIT_LABEL', payload: {label}}),
      done: () => this._dispatch({type: 'TOPIC_LIST_DONE', payload: {}}),
      cancel: () => this._dispatch({type: 'TOPIC_LIST_CANCEL', payload: {}}),
      remove: (uuid: string) => this._dispatch({type: 'TOPIC_LIST_REMOVE', payload: {uuid}}),
      loadTopics: (topics: any[]) => this._dispatch({type: 'TOPIC_LIST_LOAD_TOPICS', payload: {topics}}),
      updateLabel: (uuid: string, label: string) => this._dispatch({type: 'TOPIC_LIST_UPDATE_LABEL', payload: {uuid, label}}),
      updateText: (uuid: string, text: string) => this._dispatch({type: 'TOPIC_LIST_UPDATE_TEXT', payload: {uuid, text}})
    },
    this.topicReference = {
      start: (uuid: string, label: string, text: string) => this._dispatch({type: 'TOPIC_REFERENCE_START', payload: {uuid, label, text}}),
      editLabel: (label: string) => this._dispatch({type: 'TOPIC_REFERENCE_EDIT_LABEL', payload: {label}}),
      editText: (text: string) => this._dispatch({type: 'TOPIC_REFERENCE_EDIT_TEXT', payload: {text}})
    },
    this.working = {
      editDesc: (desc: string) => this._dispatch({type: 'WORKING_EDIT_DESC', payload: {desc}}),
      editMemo: (memo: string) => this._dispatch({type: 'WORKING_EDIT_MEMO', payload: {memo}}),
      checkTopicId: (topicId: string) => this._dispatch({type: 'WORKING_CHECK_TOPIC_ID', payload: {topicId}}),
      clear: () => this._dispatch({type: 'WORKING_CLEAR', payload: {}})
    }
  }

  setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }
}
