import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'

import { Storable } from '../../types'

const bracePath = path.join(path.dirname(require.resolve('brace/mode/javascript')), '..')

const getPluginNames = (t: string) => fs.readdirSync(path.join(bracePath, t)).map(s => s.replace(/\.js$/, ''))

const modePlugins = getPluginNames('mode')
const themePlugins = getPluginNames('theme')

export const getAcePluginNames = () => ({
  mode: modePlugins,
  theme: themePlugins
})

export const requireAllAcePlugins = () => {
  modePlugins.forEach(name => {
    require(`brace/mode/${name}`)
  })
  themePlugins.forEach(name => {
    require(`brace/theme/${name}`)
  })
}

export const changeProperty = <S extends Storable, T>(items: S[], uuid: string, name: string, value: T) => {
  const index = items.findIndex(v => v.uuid === uuid)
  assert(index >= 0)
  const item = Object.assign({}, items[index], { [name]: value })
  const results = [...items]
  results[index] = item
  return results
}
