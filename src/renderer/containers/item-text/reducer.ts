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

const create = (_state: ItemTextState): ItemTextState => {
  const uuid = uuidv4()
  assert(!_state.items.find(v => v.uuid === uuid))
  const item: ItemText = {
    uuid,
    rev: '',
    label: '',
    createdAt: 0,
    updatedAt: 0,
    lang: 'markdown',
    text: ''
  }
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
  const items = changeProperty(_state.items, uuid, 'label', text)
  return {
    items
  }
}

const editLang = (_state: ItemTextState, uuid: string, lang: string): ItemTextState => {
  const items = changeProperty(_state.items, uuid, 'label', lang)
  return {
    items
  }
}

export default function ItemTextReducer(state: ItemTextState = initialState, action: ActionType): ItemTextState {
  switch (action.type) {
    case 'ITEM_TEXT_LOAD':
      return load(state, action.payload.items)

    case 'ITEM_TEXT_CREATE':
      return create(state)

    case 'ITEM_TEXT_EDIT_LABEL':
      return editLabel(state, action.payload.uuid, action.payload.label)

    case 'ITEM_TEXT_EDIT_TEXT':
      return editText(state, action.payload.uuid, action.payload.text)

    case 'ITEM_TEXT_EDIT_LANG':
      return editLang(state, action.payload.uuid, action.payload.lang)

    default:
      return state
  }
}
