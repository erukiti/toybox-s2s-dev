const fs = require('fs')
const path = require('path')

const src = './src/renderer/index.html'
const dest = './dist/src/renderer/index.html'
fs.copyFileSync(src, dest)
