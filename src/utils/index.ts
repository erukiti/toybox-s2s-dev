import * as fs from 'fs'
import * as path from 'path'

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
