// require('autodebugger').install({
//   babylonOpts: ['typescript', 'jsx', 'classProperties'],
//   exts: ['.ts', '.tsx', '.js', '.jsx'],
//   presets: ['@babel/typescript', '@babel/react', ['@babel/env', { targets: { electron: '1.7.9' } }]]
// })

require('ts-node').register()
require('./index')
