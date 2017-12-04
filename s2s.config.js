require('ts-node').register()

const { createPluginsFromMetaRules } = require('./scripts/s2s-meta-rules')

const metaOpts = {
  babylonPlugins: ['typescript', 'classProperties', 'objectRestSpread']
}

const metaRule = {
  'src/renderer/containers/**/index.ts': {
    plugin: './scripts/index-rule'
  },
  'src/renderer/containers/**/reducer.ts': {
    plugin: './scripts/reducers-rule'
  }
}

const plugins = createPluginsFromMetaRules(metaRule, metaOpts)

module.exports = {
  watch: './src/**/*',
  plugins,
  prettier: false
}
