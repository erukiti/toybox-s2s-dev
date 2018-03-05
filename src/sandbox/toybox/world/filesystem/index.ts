import { Handler } from '../handler'
import { FsInfra } from '../infra'
import { Cache } from './cache'
import { Content } from './types'

export * from './types'

export class Filesystem {
  private _cache: Cache
  private _infra: FsInfra
  public handler: Handler
  constructor(handler: Handler, cache: Cache, infra: FsInfra) {
    this._cache = cache
    this._infra = infra
    this.handler = handler

    handler.on('create', filename => this._read(filename))
    handler.on('update', filename => this._read(filename))
    handler.on('remove', filename => this._remove(filename))
  }

  // FIXME 日付・サイズによる一致確認

  public async read(filename: string) {
    const res = this._cache.read(filename)
    if (res.error && res.error.code === 'NOT_FOUND') {
      return this._read(filename)
    }
    return res
  }

  public async write(filename: string, content: Content) {
    await this._infra.write(filename, content)
    this._cache.write(filename, content)
  }

  private async _read(filename: string) {
    const res = await this._infra.read(filename)
    if ('content' in res) {
      this._cache.write(filename, res.content)
    }
    return res
  }

  private async _remove(filename: string) {
    return this._cache.remove(filename)
  }

  public async remove(filename: string) {
    this._remove(filename)
    return this._infra.remove(filename)
  }
}
