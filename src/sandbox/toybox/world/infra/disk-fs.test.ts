import { DiskFs } from './disk-fs'

describe('read', () => {
  it('', async () => {
    const dummyFs = {
      readFileSync: jest.fn(() => 'piyo')
    }
    const diskInfra = new DiskFs(dummyFs, '/hoge')
    const res = diskInfra.read('fuga.txt')
    expect(res).resolves.toBe('piyo')
    expect(dummyFs.readFileSync).toBeCalledWith('/hoge/fuga.txt')
  })
})

describe('write', () => {
  const dummyFs = {
    writeFileSync: jest.fn(() => 'hoge')
  }

  it('without handler', () => {
    const diskInfra = new DiskFs(dummyFs, '/hoge')
    diskInfra.write('fuga.txt', 'piyo')
    expect(dummyFs.writeFileSync).toBeCalledWith('/hoge/fuga.txt', 'piyo')
  })
})
