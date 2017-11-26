const vm = require('vm')
const path = require('path')
const fs = require('fs')

export class Sandbox {
  count = 1
  sandbox = {
    require(name) {
      const full = path.resolve(path.join('node_modules', name))
      if (fs.existsSync(full)) {
        return require(full)
      }

      const start = name.substring(0, 2)

      if (start === './' || start === '..') {
        name = path.resolve(name)
      }

      return require(name)
    },
    itreed: this,
    setTimeout,
    setInterval,
    process,
    Buffer,
    String,
    Number,
    console
  }

  constructor() {
    vm.createContext(this.sandbox)
  }

  run(code) {
    return {
      result: `${vm.runInContext(code, this.sandbox)}`,
      count: this.count++
    }
  }
}
