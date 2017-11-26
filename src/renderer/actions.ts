// GENERATED! DON'T TOUCH ME!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
{ type: 'APP_CHANGE_MODE', payload: {mode: string}, } |
{ type: 'SANDBOX_EDIT_CODE', payload: {code: string}, } |
{ type: 'SANDBOX_RUN', payload: {count: number, result: string, date: number}, } |
{ type: 'STORIES_ADD', payload: {}, } |
{ type: 'STORIES_LOAD', payload: {stories: any[]}, } |
{ type: 'STORIES_UPDATE_DESC', payload: {uuid: string, desc: string}, } |
{ type: 'STORIES_UPDATE_MEMO', payload: {uuid: string, memo: string}, } |
{ type: 'STORIES_CHANGE_TOPIC_ID', payload: {uuid: string, topicId: string}, } |
{ type: 'STORY_START', payload: {uuid: string}, } |
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
{ type: 'TOPIC_REFERENCE_EDIT_TEXT', payload: {text: string}, }

export class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

  app: {
    changeMode: (mode: string) => void
  }
  sandbox: {
    editCode: (code: string) => void,
    run: (count: number, result: string, date: number) => void
  }
  stories: {
    add: () => void,
    load: (stories: any[]) => void,
    updateDesc: (uuid: string, desc: string) => void,
    updateMemo: (uuid: string, memo: string) => void,
    changeTopicId: (uuid: string, topicId: string) => void
  }
  story: {
    start: (uuid: string) => void
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

  constructor() {
    this.app = {
      changeMode: (mode: string) => this._dispatch({type: 'APP_CHANGE_MODE', payload: {mode}})
    },
    this.sandbox = {
      editCode: (code: string) => this._dispatch({type: 'SANDBOX_EDIT_CODE', payload: {code}}),
      run: (count: number, result: string, date: number) => this._dispatch({type: 'SANDBOX_RUN', payload: {count, result, date}})
    },
    this.stories = {
      add: () => this._dispatch({type: 'STORIES_ADD', payload: {}}),
      load: (stories: any[]) => this._dispatch({type: 'STORIES_LOAD', payload: {stories}}),
      updateDesc: (uuid: string, desc: string) => this._dispatch({type: 'STORIES_UPDATE_DESC', payload: {uuid, desc}}),
      updateMemo: (uuid: string, memo: string) => this._dispatch({type: 'STORIES_UPDATE_MEMO', payload: {uuid, memo}}),
      changeTopicId: (uuid: string, topicId: string) => this._dispatch({type: 'STORIES_CHANGE_TOPIC_ID', payload: {uuid, topicId}})
    },
    this.story = {
      start: (uuid: string) => this._dispatch({type: 'STORY_START', payload: {uuid}})
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
    }
  }

  setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }
}
