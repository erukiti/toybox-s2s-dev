import { EventEmitter } from 'events'

import { FsEvent, FsEventListener } from './filesystem'

export class Handler {
  private _ev: EventEmitter
  constructor() {
    this._ev = new EventEmitter()
  }

  public on(event: FsEvent, cb: FsEventListener) {
    this._ev.on(event, cb)
  }

  public emit(event: FsEvent, filepath: string) {
    this._ev.emit(event, filepath)
  }
}
