const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')

const icongen = require('icon-gen')
const Jimp = require('jimp')

const src = 'src/app.png'
const dest = 'dist/'

const temp = fs.mkdtempSync('/tmp/ws-')
Jimp.read(src)
  .then(image => {
    return Promise.all(
      [16, 24, 32, 48, 64, 128, 256, 512, 1024].map(size => {
        return new Promise((resolve, reject) => {
          image
            .clone()
            .resize(size, size)
            .write(path.join(temp, `${size}.png`), () => {
              resolve()
            })
        })
      })
    )
  })
  .then(() => {
    const name = path.basename(src, '.png')
    return icongen(temp, dest, {
      type: 'png',
      modes: ['ico', 'icns'],
      names: { ico: name, icns: name },
      sizes: {}
    })
  })
  .then(result => {
    console.log(result)
  })
