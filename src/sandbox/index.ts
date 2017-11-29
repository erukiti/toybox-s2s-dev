const vm = require('vm')
const path = require('path')
const fs = require('fs')

export class Sandbox {
  public count = 1
  public sandbox = {
    Buffer,
    Number,
    String,
    console,
    itreed: this,
    process,
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
    setInterval,
    setTimeout
  }

  constructor() {
    vm.createContext(this.sandbox)
  }

  public run(code) {
    return {
      count: this.count++,
      result: `${vm.runInContext(code, this.sandbox)}`
    }
  }
}
