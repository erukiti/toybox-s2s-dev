import * as assert from 'assert'

const uuidv4 = require('uuid-v4')

import { Item, Storable } from '../../../types'
import { changeProperty } from '../../utils'
import { ActionType } from '../actions'
export interface ItemText extends Item {
  lang: string
  text: string
}
export interface SortRule {
  isAsc: boolean
  orderType: 'createdAt' | 'updatedAt' | 'label'
}
export interface FilterRule {
  nameFilter: string
  topicFilter: string
}
export interface ItemTextState {
  items: ItemText[]
  sortRule: SortRule
  filterRule: FilterRule
}
const initialState: ItemTextState = {
  items: [],
  sortRule: {
    isAsc: false,
    orderType: 'createdAt'
  },
  filterRule: {
    nameFilter: '',
    topicFilter: ''
  }
}

const load = (_state: ItemTextState, items: any[]): ItemTextState => {
  return {
    ..._state,
    items
  }
}

const create = (_state: ItemTextState, item: any): ItemTextState => {
  assert(!_state.items.find(v => v.uuid === item.uuid))
  return {
    ..._state,
    items: [..._state.items, item]
  }
}

const editLabel = (_state: ItemTextState, uuid: string, label: string): ItemTextState => {
  const items = changeProperty(_state.items, uuid, 'label', label)
  return {
    ..._state,
    items
  }
}

const editText = (_state: ItemTextState, uuid: string, text: string): ItemTextState => {
  const items = changeProperty(_state.items, uuid, 'text', text)
  return {
    ..._state,
    items
  }
}

const editLang = (_state: ItemTextState, uuid: string, lang: string): ItemTextState => {
  const items = changeProperty(_state.items, uuid, 'lang', lang)
  return {
    ..._state,
    items
  }
}

const changeTopicsIds = (_state: ItemTextState, uuid: string, topicId: string): ItemTextState => {
  const item = _state.items.find(v => v.uuid === uuid)

  let topicIds

  if (item.topicIds.includes(topicId)) {
    topicIds = item.topicIds.filter(v => v !== topicId)
  } else {
    topicIds = [...item.topicIds, topicId]
  }

  return {
    ..._state,
    items: changeProperty(_state.items, uuid, 'topicIds', topicIds)
  }
}

const setSortType = (_state: ItemTextState, sortType: any): ItemTextState => {
  const sortRule = {
    ..._state.sortRule,
    orderType: sortType
  }
  return {
    ..._state,
    sortRule
  }
}

const setSortIsAsc = (_state: ItemTextState, isAsc: boolean): ItemTextState => {
  const sortRule = {
    ..._state.sortRule,
    isAsc
  }
  return {
    ..._state,
    sortRule
  }
}

const editNameFilter = (_state: ItemTextState, nameFilter: string): ItemTextState => {
  const filterRule = {
    ..._state.filterRule,
    nameFilter
  }
  return {
    ..._state,
    filterRule
  }
}

const editTopicFilter = (_state: ItemTextState, topicFilter: string): ItemTextState => {
  const filterRule = {
    ..._state.filterRule,
    topicFilter
  }
  return {
    ..._state,
    filterRule
  }
}

export default function ItemTextReducer(state: ItemTextState = initialState, action: ActionType): ItemTextState {
  switch (action.type) {
    case 'ITEM_TEXT_LOAD':
      return load(state, action.payload.items)

    case 'ITEM_TEXT_CREATE':
      return create(state, action.payload.item)

    case 'ITEM_TEXT_EDIT_LABEL':
      return editLabel(state, action.payload.uuid, action.payload.label)

    case 'ITEM_TEXT_EDIT_TEXT':
      return editText(state, action.payload.uuid, action.payload.text)

    case 'ITEM_TEXT_EDIT_LANG':
      return editLang(state, action.payload.uuid, action.payload.lang)

    case 'ITEM_TEXT_CHANGE_TOPICS_IDS':
      return changeTopicsIds(state, action.payload.uuid, action.payload.topicId)

    case 'ITEM_TEXT_SET_SORT_TYPE':
      return setSortType(state, action.payload.sortType)

    case 'ITEM_TEXT_SET_SORT_IS_ASC':
      return setSortIsAsc(state, action.payload.isAsc)

    case 'ITEM_TEXT_EDIT_NAME_FILTER':
      return editNameFilter(state, action.payload.nameFilter)

    case 'ITEM_TEXT_EDIT_TOPIC_FILTER':
      return editTopicFilter(state, action.payload.topicFilter)

    default:
      return state
  }
}
