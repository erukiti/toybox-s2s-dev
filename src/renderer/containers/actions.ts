// GENERATED! DON'T TOUCH ME!

import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
  | { type: 'APP_CHANGE_MODE'; payload: { mode: string } }
  | { type: 'BOARD_LIST_LOAD'; payload: { boards: any[] } }
  | { type: 'BOARD_LOAD'; payload: { boards: any[] } }
  | { type: 'BOARD_CREATE'; payload: {} }
  | { type: 'ITEM_TEXT_LOAD'; payload: { items: any[] } }
  | { type: 'ITEM_TEXT_CREATE'; payload: {} }
  | { type: 'ITEM_TEXT_EDIT_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'ITEM_TEXT_EDIT_TEXT'; payload: { uuid: string; text: string } }
  | { type: 'ITEM_TEXT_EDIT_LANG'; payload: { uuid: string; lang: string } }
  | { type: 'SANDBOX_EDIT_CODE'; payload: { code: string } }
  | { type: 'SANDBOX_RUN'; payload: { count: number; result: string; date: number } }
  | { type: 'TOPIC_LIST_NEW_TOPIC'; payload: {} }
  | { type: 'TOPIC_LIST_EDIT_LABEL'; payload: { label: string } }
  | { type: 'TOPIC_LIST_DONE'; payload: {} }
  | { type: 'TOPIC_LIST_CANCEL'; payload: {} }
  | { type: 'TOPIC_LIST_REMOVE'; payload: { uuid: string } }
  | { type: 'TOPIC_LIST_LOAD_TOPICS'; payload: { topics: any[] } }
  | { type: 'TOPIC_LIST_UPDATE_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'TOPIC_LIST_UPDATE_TEXT'; payload: { uuid: string; text: string } }
  | { type: 'TOPIC_REFERENCE_START'; payload: { uuid: string; label: string; text: string } }
  | { type: 'TOPIC_REFERENCE_EDIT_LABEL'; payload: { label: string } }
  | { type: 'TOPIC_REFERENCE_EDIT_TEXT'; payload: { text: string } }

class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }

  public app: {
    changeMode: (mode: string) => void
  }
  public boardList: {
    load: (boards: any[]) => void
  }
  public board: {
    load: (boards: any[]) => void
    create: () => void
  }
  public itemText: {
    load: (items: any[]) => void
    create: () => void
    editLabel: (uuid: string, label: string) => void
    editText: (uuid: string, text: string) => void
    editLang: (uuid: string, lang: string) => void
  }
  public sandbox: {
    editCode: (code: string) => void
    run: (count: number, result: string, date: number) => void
  }
  public topicList: {
    newTopic: () => void
    editLabel: (label: string) => void
    done: () => void
    cancel: () => void
    remove: (uuid: string) => void
    loadTopics: (topics: any[]) => void
    updateLabel: (uuid: string, label: string) => void
    updateText: (uuid: string, text: string) => void
  }
  public topicReference: {
    start: (uuid: string, label: string, text: string) => void
    editLabel: (label: string) => void
    editText: (text: string) => void
  }

  constructor() {
    this.app = {
      changeMode: (mode: string) => this._dispatch({ type: 'APP_CHANGE_MODE', payload: { mode } })
    }
    this.boardList = {
      load: (boards: any[]) => this._dispatch({ type: 'BOARD_LIST_LOAD', payload: { boards } })
    }
    this.board = {
      load: (boards: any[]) => this._dispatch({ type: 'BOARD_LOAD', payload: { boards } }),
      create: () => this._dispatch({ type: 'BOARD_CREATE', payload: {} })
    }
    this.itemText = {
      load: (items: any[]) => this._dispatch({ type: 'ITEM_TEXT_LOAD', payload: { items } }),
      create: () => this._dispatch({ type: 'ITEM_TEXT_CREATE', payload: {} }),
      editLabel: (uuid: string, label: string) =>
        this._dispatch({ type: 'ITEM_TEXT_EDIT_LABEL', payload: { uuid, label } }),
      editText: (uuid: string, text: string) =>
        this._dispatch({ type: 'ITEM_TEXT_EDIT_TEXT', payload: { uuid, text } }),
      editLang: (uuid: string, lang: string) => this._dispatch({ type: 'ITEM_TEXT_EDIT_LANG', payload: { uuid, lang } })
    }
    this.sandbox = {
      editCode: (code: string) => this._dispatch({ type: 'SANDBOX_EDIT_CODE', payload: { code } }),
      run: (count: number, result: string, date: number) =>
        this._dispatch({ type: 'SANDBOX_RUN', payload: { count, result, date } })
    }
    this.topicList = {
      newTopic: () => this._dispatch({ type: 'TOPIC_LIST_NEW_TOPIC', payload: {} }),
      editLabel: (label: string) => this._dispatch({ type: 'TOPIC_LIST_EDIT_LABEL', payload: { label } }),
      done: () => this._dispatch({ type: 'TOPIC_LIST_DONE', payload: {} }),
      cancel: () => this._dispatch({ type: 'TOPIC_LIST_CANCEL', payload: {} }),
      remove: (uuid: string) => this._dispatch({ type: 'TOPIC_LIST_REMOVE', payload: { uuid } }),
      loadTopics: (topics: any[]) => this._dispatch({ type: 'TOPIC_LIST_LOAD_TOPICS', payload: { topics } }),
      updateLabel: (uuid: string, label: string) =>
        this._dispatch({ type: 'TOPIC_LIST_UPDATE_LABEL', payload: { uuid, label } }),
      updateText: (uuid: string, text: string) =>
        this._dispatch({ type: 'TOPIC_LIST_UPDATE_TEXT', payload: { uuid, text } })
    }
    this.topicReference = {
      start: (uuid: string, label: string, text: string) =>
        this._dispatch({ type: 'TOPIC_REFERENCE_START', payload: { uuid, label, text } }),
      editLabel: (label: string) => this._dispatch({ type: 'TOPIC_REFERENCE_EDIT_LABEL', payload: { label } }),
      editText: (text: string) => this._dispatch({ type: 'TOPIC_REFERENCE_EDIT_TEXT', payload: { text } })
    }
  }
}

export class DispatchAction {
  protected _dispatch: Dispatcher

  public _first() {}

  constructor() {
    this._dispatch = new Dispatcher()
  }

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch.setDispatch(dispatch)
  }
}

export class AppDispatchAction extends DispatchAction {
  public changeMode(mode: string) {
    this._dispatch.app.changeMode(mode)
  }
}

export class BoardListDispatchAction extends DispatchAction {
  public load(boards: any[]) {
    this._dispatch.boardList.load(boards)
  }
}

export class BoardDispatchAction extends DispatchAction {
  public load(boards: any[]) {
    this._dispatch.board.load(boards)
  }
  public create() {
    this._dispatch.board.create()
  }
}

export class ItemTextDispatchAction extends DispatchAction {
  public load(items: any[]) {
    this._dispatch.itemText.load(items)
  }
  public create() {
    this._dispatch.itemText.create()
  }
  public editLabel(uuid: string, label: string) {
    this._dispatch.itemText.editLabel(uuid, label)
  }
  public editText(uuid: string, text: string) {
    this._dispatch.itemText.editText(uuid, text)
  }
  public editLang(uuid: string, lang: string) {
    this._dispatch.itemText.editLang(uuid, lang)
  }
}

export class SandboxDispatchAction extends DispatchAction {
  public editCode(code: string) {
    this._dispatch.sandbox.editCode(code)
  }
  public run(count: number, result: string, date: number) {
    this._dispatch.sandbox.run(count, result, date)
  }
}

export class TopicListDispatchAction extends DispatchAction {
  public newTopic() {
    this._dispatch.topicList.newTopic()
  }
  public editLabel(label: string) {
    this._dispatch.topicList.editLabel(label)
  }
  public done() {
    this._dispatch.topicList.done()
  }
  public cancel() {
    this._dispatch.topicList.cancel()
  }
  public remove(uuid: string) {
    this._dispatch.topicList.remove(uuid)
  }
  public loadTopics(topics: any[]) {
    this._dispatch.topicList.loadTopics(topics)
  }
  public updateLabel(uuid: string, label: string) {
    this._dispatch.topicList.updateLabel(uuid, label)
  }
  public updateText(uuid: string, text: string) {
    this._dispatch.topicList.updateText(uuid, text)
  }
}

export class TopicReferenceDispatchAction extends DispatchAction {
  public start(uuid: string, label: string, text: string) {
    this._dispatch.topicReference.start(uuid, label, text)
  }
  public editLabel(label: string) {
    this._dispatch.topicReference.editLabel(label)
  }
  public editText(text: string) {
    this._dispatch.topicReference.editText(text)
  }
}

import { AppAction } from './app/action'
import { BoardListAction } from './board-list/action'
import { BoardAction } from './board/action'
import { ItemTextAction } from './item-text/action'
import { SandboxAction } from './sandbox/action'
import { TopicListAction } from './topic-list/action'
import { TopicReferenceAction } from './topic-reference/action'

export class Actions {
  public app: AppAction
  public boardList: BoardListAction
  public board: BoardAction
  public itemText: ItemTextAction
  public sandbox: SandboxAction
  public topicList: TopicListAction
  public topicReference: TopicReferenceAction
  constructor() {
    this.app = new AppAction()
    this.boardList = new BoardListAction()
    this.board = new BoardAction()
    this.itemText = new ItemTextAction()
    this.sandbox = new SandboxAction()
    this.topicList = new TopicListAction()
    this.topicReference = new TopicReferenceAction()
  }

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this.app.setDispatch(dispatch)
    this.boardList.setDispatch(dispatch)
    this.board.setDispatch(dispatch)
    this.itemText.setDispatch(dispatch)
    this.sandbox.setDispatch(dispatch)
    this.topicList.setDispatch(dispatch)
    this.topicReference.setDispatch(dispatch)
  }
}
