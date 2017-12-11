import { Storable } from '../types'
const sha256 = require('sha256')

export class Repository<T extends Storable> {
  private _data: T[]
  private _onUpdate = (allData: T[]) => {}

  public get(filter = (topic: T) => true) {
    return this._data.filter(filter)
  }

  public getById(uuid: string) {
    const arr = this._data.filter(data => uuid === data.uuid)
    if (arr.length === 1) {
      return arr[0]
    } else {
      return null
    }
  }

  public load(allData: T[]) {
    this._data = allData
  }
  // public create(data: T) {
  //   this._data.push(data)
  //   this._onUpdate(this._data)
  // }

  // public update(data: T) {
  //   this._data = [...this._data.filter(v => v.uuid !== data.uuid), data]
  //   this._onUpdate(this._data)
  // }

  public allUpdate(allData: T[]) {
    const ignores = ['rev', 'createdAt', 'updatedAt']

    this._data = allData.map(data => {
      const prev = data.rev
      if (data.createdAt === 0) {
        data.updatedAt = data.createdAt = Date.now()
      }

      const seed = Object.keys(data)
        .filter(key => !ignores.includes(key))
        .sort()
        .map(key => `${key}:${data[key]}`)
        .join(',')
      data.rev = sha256(seed)
      if (prev !== data.rev) {
        data.updatedAt = Date.now()
      }
      return data
    })
    this._onUpdate(this._data)
  }

  public on(ev: string, cb: (allData: T[]) => void) {
    switch (ev) {
      case 'update': {
        this._onUpdate = cb
      }
    }
  }
}
