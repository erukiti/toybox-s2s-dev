require('ts-node').register()

const {createPluginsFromMetaRules} = require('s2s-meta-rules')

const metaOpts = {
  babylonPlugins: ['typescript', 'classProperties']
}

const metaRule = {
  'src/renderer/**/reducer.*': {
    output: '../reducers.ts',
    plugin: './scripts/reducers-rule',
  },
  'src/renderer/**/action.*': {
    output: '../actions.ts',
    plugin: './scripts/actions-rule',
  },
  'src/renderer/**/index.ts': {
    plugin: './scripts/index-rule',
  },
}

const plugins = createPluginsFromMetaRules(metaRule, metaOpts)

module.exports = {
  watch: './src/**/*',
  plugins,
  prettier: false,
}
