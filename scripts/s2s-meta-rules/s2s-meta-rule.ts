import metaRuleHandler from './s2s-handler-meta-rule'

const globToRegexp = pattern => {
  const asteriskPattern = {
    '*': '[^/]+',
    '**': '.*'
  }

  return new RegExp(pattern.replace('.', '.').replace(/\*\*?/g, matched => asteriskPattern[matched]))
}

export const createPluginsFromMetaRules = (rule, opts) => {
  const plugins = Object.keys(rule).map(key => {
    const { output, plugin } = rule[key]
    return {
      babylonPlugins: opts.babylonPlugins,
      handler: metaRuleHandler,
      output,
      plugin,
      pluginOpts: {
        source: key
      },
      test: globToRegexp(key)
    }
  })

  return plugins
}
