import { Handler } from '../handler'
import { Cache } from './cache'
import { Filesystem } from './index'

const dummyInfra = {
  read: jest.fn(),
  write: jest.fn(),
  remove: jest.fn()
}

describe('read', () => {
  it('', async () => {
    expect.assertions(2)
    const cache = new Cache()
    const handler = new Handler()
    cache.read = jest.fn(() => ({ content: 'hoge' }))
    const fs = new Filesystem(handler, cache, dummyInfra)
    const res = await fs.read('hoge.txt')
    expect(res).toEqual({ content: 'hoge' })
    expect(cache.read).toBeCalledWith('hoge.txt')
  })
})
