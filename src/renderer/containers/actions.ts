// GENERATED! DON'T TOUCH ME!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
  | { type: 'APP_ADD_PANE'; payload: {} }
  | { type: 'APP_OPEN'; payload: { paneIndex: number; mode: string; uuid: string } }
  | { type: 'BOARD_LOAD'; payload: { boards: any[] } }
  | { type: 'BOARD_CREATE'; payload: { board: any } }
  | { type: 'BOARD_EDIT_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'BOARD_CHANGE_TOPICS_IDS'; payload: { uuid: string; topicId: string } }
  | { type: 'ITEM_TEXT_LOAD'; payload: { items: any[] } }
  | { type: 'ITEM_TEXT_CREATE'; payload: {} }
  | { type: 'ITEM_TEXT_EDIT_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'ITEM_TEXT_EDIT_TEXT'; payload: { uuid: string; text: string } }
  | { type: 'ITEM_TEXT_EDIT_LANG'; payload: { uuid: string; lang: string } }
  | { type: 'SANDBOX_EDIT_CODE'; payload: { code: string } }
  | { type: 'SANDBOX_RUN'; payload: { count: number; result: string; date: number } }
  | { type: 'TOPIC_ADD_EDIT_LABEL'; payload: { label: string } }
  | { type: 'TOPIC_ADD_EDIT_TEXT'; payload: { text: string } }
  | { type: 'TOPIC_ADD_CLEAR'; payload: {} }
  | { type: 'TOPIC_LIST_EDIT_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'TOPIC_LIST_EDIT_TEXT'; payload: { uuid: string; text: string } }
  | { type: 'TOPIC_LIST_ADD'; payload: { label: string; text: string } }
  | { type: 'TOPIC_LIST_REMOVE'; payload: { uuid: string } }
  | { type: 'TOPIC_LIST_LOAD_TOPICS'; payload: { topics: any[] } }

class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }

  public app: {
    addPane: () => void
    open: (paneIndex: number, mode: string, uuid: string) => void
  }
  public board: {
    load: (boards: any[]) => void
    create: (board: any) => void
    editLabel: (uuid: string, label: string) => void
    changeTopicsIds: (uuid: string, topicId: string) => void
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
  public topicAdd: {
    editLabel: (label: string) => void
    editText: (text: string) => void
    clear: () => void
  }
  public topicList: {
    editLabel: (uuid: string, label: string) => void
    editText: (uuid: string, text: string) => void
    add: (label: string, text: string) => void
    remove: (uuid: string) => void
    loadTopics: (topics: any[]) => void
  }

  constructor() {
    this.app = {
      addPane: () => this._dispatch({ type: 'APP_ADD_PANE', payload: {} }),
      open: (paneIndex: number, mode: string, uuid: string) =>
        this._dispatch({ type: 'APP_OPEN', payload: { paneIndex, mode, uuid } })
    }
    this.board = {
      load: (boards: any[]) => this._dispatch({ type: 'BOARD_LOAD', payload: { boards } }),
      create: (board: any) => this._dispatch({ type: 'BOARD_CREATE', payload: { board } }),
      editLabel: (uuid: string, label: string) =>
        this._dispatch({ type: 'BOARD_EDIT_LABEL', payload: { uuid, label } }),
      changeTopicsIds: (uuid: string, topicId: string) =>
        this._dispatch({ type: 'BOARD_CHANGE_TOPICS_IDS', payload: { uuid, topicId } })
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
    this.topicAdd = {
      editLabel: (label: string) => this._dispatch({ type: 'TOPIC_ADD_EDIT_LABEL', payload: { label } }),
      editText: (text: string) => this._dispatch({ type: 'TOPIC_ADD_EDIT_TEXT', payload: { text } }),
      clear: () => this._dispatch({ type: 'TOPIC_ADD_CLEAR', payload: {} })
    }
    this.topicList = {
      editLabel: (uuid: string, label: string) =>
        this._dispatch({ type: 'TOPIC_LIST_EDIT_LABEL', payload: { uuid, label } }),
      editText: (uuid: string, text: string) =>
        this._dispatch({ type: 'TOPIC_LIST_EDIT_TEXT', payload: { uuid, text } }),
      add: (label: string, text: string) => this._dispatch({ type: 'TOPIC_LIST_ADD', payload: { label, text } }),
      remove: (uuid: string) => this._dispatch({ type: 'TOPIC_LIST_REMOVE', payload: { uuid } }),
      loadTopics: (topics: any[]) => this._dispatch({ type: 'TOPIC_LIST_LOAD_TOPICS', payload: { topics } })
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
  public addPane() {
    this._dispatch.app.addPane()
  }
  public open(paneIndex: number, mode: string, uuid: string) {
    this._dispatch.app.open(paneIndex, mode, uuid)
  }
}

export class BoardDispatchAction extends DispatchAction {
  public load(boards: any[]) {
    this._dispatch.board.load(boards)
  }
  public create(board: any) {
    this._dispatch.board.create(board)
  }
  public editLabel(uuid: string, label: string) {
    this._dispatch.board.editLabel(uuid, label)
  }
  public changeTopicsIds(uuid: string, topicId: string) {
    this._dispatch.board.changeTopicsIds(uuid, topicId)
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

export class TopicAddDispatchAction extends DispatchAction {
  public editLabel(label: string) {
    this._dispatch.topicAdd.editLabel(label)
  }
  public editText(text: string) {
    this._dispatch.topicAdd.editText(text)
  }
  public clear() {
    this._dispatch.topicAdd.clear()
  }
}

export class TopicListDispatchAction extends DispatchAction {
  public editLabel(uuid: string, label: string) {
    this._dispatch.topicList.editLabel(uuid, label)
  }
  public editText(uuid: string, text: string) {
    this._dispatch.topicList.editText(uuid, text)
  }
  public add(label: string, text: string) {
    this._dispatch.topicList.add(label, text)
  }
  public remove(uuid: string) {
    this._dispatch.topicList.remove(uuid)
  }
  public loadTopics(topics: any[]) {
    this._dispatch.topicList.loadTopics(topics)
  }
}

import { AppAction } from './app/action'
import { BoardAction } from './board/action'
import { ItemTextAction } from './item-text/action'
import { SandboxAction } from './sandbox/action'
import { TopicAddAction } from './topic-add/action'
import { TopicListAction } from './topic-list/action'

export class Actions {
  public app: AppAction
  public board: BoardAction
  public itemText: ItemTextAction
  public sandbox: SandboxAction
  public topicAdd: TopicAddAction
  public topicList: TopicListAction
  constructor() {
    this.app = new AppAction()
    this.board = new BoardAction()
    this.itemText = new ItemTextAction()
    this.sandbox = new SandboxAction()
    this.topicAdd = new TopicAddAction()
    this.topicList = new TopicListAction()
  }

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this.app.setDispatch(dispatch)
    this.board.setDispatch(dispatch)
    this.itemText.setDispatch(dispatch)
    this.sandbox.setDispatch(dispatch)
    this.topicAdd.setDispatch(dispatch)
    this.topicList.setDispatch(dispatch)
  }
}
