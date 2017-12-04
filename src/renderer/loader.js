// const presetTS = require('@babel/preset-typescript').default
// const presetReact = require('@babel/preset-react').default
// const presetEnv = require('@babel/preset-env').default

// require('@babel/register')({
//   presets: [presetTS, presetReact, [presetEnv, { targets: { electron: '1.7.9' } }]],
//   extensions: ['.ts', '.tsx']
// })
require('ts-node').register()
require('./index')
