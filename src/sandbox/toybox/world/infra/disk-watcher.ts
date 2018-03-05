import { Handler } from '../handler'

export class DiskWatcher {
  private _handler: Handler
  private _watcher
  constructor(handler: Handler, watchPattern: string, chokidar) {
    this._handler = handler

    this._watcher = chokidar.watch(watchPattern)
    // FIXME ファイル名をどうかする
    this._watcher.on('add', name => handler.emit('create', name))
    this._watcher.on('change', name => handler.emit('update', name))
    this._watcher.on('unlink', name => handler.emit('remove', name))
    this._watcher.on('addDir', name => handler.emit('create', name))
    this._watcher.on('unlinkDir', name => handler.emit('remove', name))
  }
}
