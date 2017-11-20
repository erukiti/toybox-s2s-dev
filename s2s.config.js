require('ts-node').register()

const {createPluginsFromMetaRules} = require('s2s-meta-rules')

const metaOpts = {
  babylonPlugins: ['typescript', 'classProperties']
}

const metaRule = {
  'src/renderer/**/index.ts': {
    plugin: './scripts/index-rule',
  },
  'src/renderer/**/reducer.*': {
    plugin: './scripts/reducers-rule',
  },
}

const plugins = createPluginsFromMetaRules(metaRule, metaOpts)

module.exports = {
  watch: './src/**/*',
  plugins,
  prettier: false,
}
