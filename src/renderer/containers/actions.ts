// GENERATED! DON'T TOUCH ME!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
  | { type: 'APP_ADD_PANE'; payload: {} }
  | { type: 'APP_OPEN'; payload: { paneIndex: number; mode: string; uuid: string } }
  | { type: 'APP_SELECT_TAB'; payload: { paneIndex: number; tabIndex: number } }
  | { type: 'BOARDS_LOAD'; payload: { boards: any[] } }
  | { type: 'BOARDS_CREATE'; payload: { board: any } }
  | { type: 'BOARDS_EDIT_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'BOARDS_CHANGE_TOPICS_IDS'; payload: { uuid: string; topicId: string } }
  | { type: 'BOARDS_ADD_ITEM'; payload: { uuid: string; itemId: string } }
  | { type: 'ITEM_TEXT_LOAD'; payload: { items: any[] } }
  | { type: 'ITEM_TEXT_CREATE'; payload: { item: any } }
  | { type: 'ITEM_TEXT_EDIT_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'ITEM_TEXT_EDIT_TEXT'; payload: { uuid: string; text: string } }
  | { type: 'ITEM_TEXT_EDIT_LANG'; payload: { uuid: string; lang: string } }
  | { type: 'SANDBOX_EDIT_CODE'; payload: { code: string } }
  | { type: 'SANDBOX_RUN'; payload: { count: number; result: string; date: number } }
  | { type: 'TOPIC_ADD_EDIT_LABEL'; payload: { label: string } }
  | { type: 'TOPIC_ADD_EDIT_TEXT'; payload: { text: string } }
  | { type: 'TOPIC_ADD_CLEAR'; payload: {} }
  | { type: 'TOPICS_EDIT_LABEL'; payload: { uuid: string; label: string } }
  | { type: 'TOPICS_EDIT_TEXT'; payload: { uuid: string; text: string } }
  | { type: 'TOPICS_ADD'; payload: { label: string; text: string } }
  | { type: 'TOPICS_REMOVE'; payload: { uuid: string } }
  | { type: 'TOPICS_LOAD_TOPICS'; payload: { topics: any[] } }

class Dispatcher {
  private _dispatch: ReduxDispatch<ActionType>

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this._dispatch = dispatch
  }

  public app: {
    addPane: () => void
    open: (paneIndex: number, mode: string, uuid: string) => void
    selectTab: (paneIndex: number, tabIndex: number) => void
  }
  public boards: {
    load: (boards: any[]) => void
    create: (board: any) => void
    editLabel: (uuid: string, label: string) => void
    changeTopicsIds: (uuid: string, topicId: string) => void
    addItem: (uuid: string, itemId: string) => void
  }
  public itemText: {
    load: (items: any[]) => void
    create: (item: any) => void
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
  public topics: {
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
        this._dispatch({ type: 'APP_OPEN', payload: { paneIndex, mode, uuid } }),
      selectTab: (paneIndex: number, tabIndex: number) =>
        this._dispatch({ type: 'APP_SELECT_TAB', payload: { paneIndex, tabIndex } })
    }
    this.boards = {
      load: (boards: any[]) => this._dispatch({ type: 'BOARDS_LOAD', payload: { boards } }),
      create: (board: any) => this._dispatch({ type: 'BOARDS_CREATE', payload: { board } }),
      editLabel: (uuid: string, label: string) =>
        this._dispatch({ type: 'BOARDS_EDIT_LABEL', payload: { uuid, label } }),
      changeTopicsIds: (uuid: string, topicId: string) =>
        this._dispatch({ type: 'BOARDS_CHANGE_TOPICS_IDS', payload: { uuid, topicId } }),
      addItem: (uuid: string, itemId: string) => this._dispatch({ type: 'BOARDS_ADD_ITEM', payload: { uuid, itemId } })
    }
    this.itemText = {
      load: (items: any[]) => this._dispatch({ type: 'ITEM_TEXT_LOAD', payload: { items } }),
      create: (item: any) => this._dispatch({ type: 'ITEM_TEXT_CREATE', payload: { item } }),
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
    this.topics = {
      editLabel: (uuid: string, label: string) =>
        this._dispatch({ type: 'TOPICS_EDIT_LABEL', payload: { uuid, label } }),
      editText: (uuid: string, text: string) => this._dispatch({ type: 'TOPICS_EDIT_TEXT', payload: { uuid, text } }),
      add: (label: string, text: string) => this._dispatch({ type: 'TOPICS_ADD', payload: { label, text } }),
      remove: (uuid: string) => this._dispatch({ type: 'TOPICS_REMOVE', payload: { uuid } }),
      loadTopics: (topics: any[]) => this._dispatch({ type: 'TOPICS_LOAD_TOPICS', payload: { topics } })
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
  public selectTab(paneIndex: number, tabIndex: number) {
    this._dispatch.app.selectTab(paneIndex, tabIndex)
  }
}

export class BoardsDispatchAction extends DispatchAction {
  public load(boards: any[]) {
    this._dispatch.boards.load(boards)
  }
  public create(board: any) {
    this._dispatch.boards.create(board)
  }
  public editLabel(uuid: string, label: string) {
    this._dispatch.boards.editLabel(uuid, label)
  }
  public changeTopicsIds(uuid: string, topicId: string) {
    this._dispatch.boards.changeTopicsIds(uuid, topicId)
  }
  public addItem(uuid: string, itemId: string) {
    this._dispatch.boards.addItem(uuid, itemId)
  }
}

export class ItemTextDispatchAction extends DispatchAction {
  public load(items: any[]) {
    this._dispatch.itemText.load(items)
  }
  public create(item: any) {
    this._dispatch.itemText.create(item)
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

export class TopicsDispatchAction extends DispatchAction {
  public editLabel(uuid: string, label: string) {
    this._dispatch.topics.editLabel(uuid, label)
  }
  public editText(uuid: string, text: string) {
    this._dispatch.topics.editText(uuid, text)
  }
  public add(label: string, text: string) {
    this._dispatch.topics.add(label, text)
  }
  public remove(uuid: string) {
    this._dispatch.topics.remove(uuid)
  }
  public loadTopics(topics: any[]) {
    this._dispatch.topics.loadTopics(topics)
  }
}

import { AppAction } from './app/action'
import { BoardsAction } from './boards/action'
import { ItemTextAction } from './item-text/action'
import { SandboxAction } from './sandbox/action'
import { TopicAddAction } from './topic-add/action'
import { TopicsAction } from './topics/action'

export class Actions {
  public app: AppAction
  public boards: BoardsAction
  public itemText: ItemTextAction
  public sandbox: SandboxAction
  public topicAdd: TopicAddAction
  public topics: TopicsAction
  constructor() {
    this.app = new AppAction()
    this.boards = new BoardsAction()
    this.itemText = new ItemTextAction()
    this.sandbox = new SandboxAction()
    this.topicAdd = new TopicAddAction()
    this.topics = new TopicsAction()
  }

  public setDispatch(dispatch: ReduxDispatch<ActionType>) {
    this.app.setDispatch(dispatch)
    this.boards.setDispatch(dispatch)
    this.itemText.setDispatch(dispatch)
    this.sandbox.setDispatch(dispatch)
    this.topicAdd.setDispatch(dispatch)
    this.topics.setDispatch(dispatch)
  }
}
