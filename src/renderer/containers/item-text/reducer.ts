import * as assert from 'assert'

const uuidv4 = require('uuid-v4')

import { Item, Storable } from '../../../types'
import { changeProperty } from '../../utils'
import { ActionType } from '../actions'
export interface ItemText extends Item {
  lang: string
  text: string
}
export interface ItemTextState {
  items: ItemText[]
}
const initialState: ItemTextState = {
  items: []
}

const load = (_state: ItemTextState, items: any[]): ItemTextState => {
  return {
    items
  }
}

const create = (_state: ItemTextState, item: any): ItemTextState => {
  assert(!_state.items.find(v => v.uuid === item.uuid))
  return {
    items: [..._state.items, item]
  }
}

const editLabel = (_state: ItemTextState, uuid: string, label: string): ItemTextState => {
  const items = changeProperty(_state.items, uuid, 'label', label)
  return {
    items
  }
}

const editText = (_state: ItemTextState, uuid: string, text: string): ItemTextState => {
  const items = changeProperty(_state.items, uuid, 'text', text)
  return {
    items
  }
}

const editLang = (_state: ItemTextState, uuid: string, lang: string): ItemTextState => {
  const items = changeProperty(_state.items, uuid, 'lang', lang)
  return {
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
    items: changeProperty(_state.items, uuid, 'topicIds', topicIds)
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

    default:
      return state
  }
}
