const uuidv4 = require('uuid-v4')

import { store } from '../../'
import { repositories } from '../../../repository'
import { Item } from '../../../types'
import { ItemTextDispatchAction } from '../actions'

export class ItemTextAction extends ItemTextDispatchAction {
  private _prev = null

  public _first() {
    this._dispatch.itemText.load(repositories.item.get())
    store.subscribe(() => {
      const state = store.getState()
      if (this._prev && this._prev.itemText !== state.itemText) {
        repositories.item.allUpdate(state.itemText.items)
      }
      this._prev = state
    })
  }

  public start(uuid?: string) {
    if (!uuid) {
      uuid = this.create()
    }
    this._dispatch.app.open(0, 'item', uuid)
  }

  public create(lang: string = 'markdown') {
    const uuid = uuidv4()
    const item: Item = {
      uuid,
      rev: '',
      label: '',
      createdAt: 0,
      updatedAt: 0,
      lang,
      text: '',
      topicIds: []
    }
    this._dispatch.itemText.create(item)
    return item.uuid
  }
}
