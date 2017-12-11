require('ts-node').register()

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const { transformFileSync } = require('@babel/core')

const { readNpmVersion } = require('./utils')
require('./electron-icon')

const re = /\.tsx?$/

rimraf.sync('dist')
mkdirp.sync('dist')

const build = srcDir => {
  fs.readdirSync(srcDir).forEach(file => {
    const filename = path.join(srcDir, file)
    const destFilename = path.join('dist', ...filename.split('/').slice(1))
    const stat = fs.statSync(filename)
    if (stat.isDirectory()) {
      mkdirp(destFilename)
      return build(filename)
    } else if (re.test(file)) {
      const { code } = transformFileSync(filename, { presets: ['@babel/typescript', '@babel/react'] })
      fs.writeFileSync(destFilename.replace(/\.tsx?$/, '.js'), code)
    } else {
      fs.copyFileSync(filename, destFilename)
    }
  })
}

build('src')

// FIXME: bundle

const packageInfo = JSON.parse(fs.readFileSync('./package.json'))
const packager = require('electron-packager')
// const createInstaller = require('electron-installer-dmg')
const electronVersion = readNpmVersion('electron')
const name = packageInfo.name
const packagerConf = {
  dir: 'dist',
  out: 'release/',
  name,
  appVersion: packageInfo.version,
  arch: ['x64'],
  asar: true,
  platform: 'darwin',
  electronVersion,
  icon: path.join('dist', 'app.icns'),
  overwrite: true
}

packager(packagerConf, (err, dir) => {
  if (err) {
    logger.error(err)
    return
  }
  // createInstaller(
  //   {
  //     appPath: `${dir}/${name}.app`,
  //     name,
  //     overwrite: true,
  //     out: 'release/'
  //   },
  //   err2 => {
  //     if (err2) {
  //       logger.error(err2.toString())
  //     } else {
  //       console.log(`create macOS DMG -> release/${name}.dmg`)
  //     }
  //   }
  // )
  console.log('done')
})

