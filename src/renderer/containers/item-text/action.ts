const uuidv4 = require('uuid-v4')

import { Item } from '../../../types'
import { ItemTextDispatchAction } from '../actions'

export class ItemTextAction extends ItemTextDispatchAction {
  public create(lang: string = 'markdown') {
    const uuid = uuidv4()
    const item: Item = {
      uuid,
      rev: '',
      label: '',
      createdAt: 0,
      updatedAt: 0,
      lang,
      text: ''
    }
    this._dispatch.itemText.create(item)
    return item.uuid
  }
}
