import { changeProperty } from './index'

it('', () => {
  const items: any = [{ uuid: '1', text: 'fuga' }]
  const result = changeProperty(items, '1', 'text', 'hoge')
  expect(result).toEqual([{ uuid: '1', text: 'hoge' }])
})

it('', () => {
  const items: any = [{ uuid: '1', text: '1' }, { uuid: '2', text: '2' }]
  const result = changeProperty(items, '1', 'text', 'hoge')
  expect(result).toEqual([{ uuid: '1', text: 'hoge' }, { uuid: '2', text: '2' }])
})

it('', () => {
  const items: any = [{ uuid: '1', text: '1' }, { uuid: '2', text: '2' }]
  const result = changeProperty(items, '2', 'text', 'hoge')
  expect(result).toEqual([{ uuid: '1', text: '1' }, { uuid: '2', text: 'hoge' }])
})

it('', () => {
  const items: any = [{ uuid: '1', text: '1' }, { uuid: '2', text: '2' }, { uuid: '3', text: '3' }]
  const result = changeProperty(items, '1', 'text', 'hoge')
  expect(result).toEqual([{ uuid: '1', text: 'hoge' }, { uuid: '2', text: '2' }, { uuid: '3', text: '3' }])
})

it('', () => {
  const items: any = [{ uuid: '1', text: '1' }, { uuid: '2', text: '2' }, { uuid: '3', text: '3' }]
  const result = changeProperty(items, '1', 'text', 'hoge')
  expect(result).toEqual([{ uuid: '1', text: 'hoge' }, { uuid: '2', text: '2' }, { uuid: '3', text: '3' }])
})

it('', () => {
  const items: any = [{ uuid: '1', text: '1' }, { uuid: '2', text: '2' }, { uuid: '3', text: '3' }]
  const result = changeProperty(items, '3', 'text', 'hoge')
  expect(result).toEqual([{ uuid: '1', text: '1' }, { uuid: '2', text: '2' }, { uuid: '3', text: 'hoge' }])
})

it('', () => {
  const items: any = [{ uuid: '1', text: '1' }, { uuid: '2', text: '2' }, { uuid: '3', text: '3' }]
  const result = changeProperty(items, '2', 'text', 'hoge')
  expect(result).toEqual([{ uuid: '1', text: '1' }, { uuid: '2', text: 'hoge' }, { uuid: '3', text: '3' }])
})
