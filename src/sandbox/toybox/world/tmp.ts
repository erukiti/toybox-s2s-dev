import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import * as vm from 'vm'

import { World } from './index'

class TmpWorld extends World {
  private _dir: string
  public async setup() {
    const prefix = path.join(os.tmpdir(), 'toybox-')
    this._dir = fs.mkdtempSync(prefix)
  }

  public async runCode(sourceCode: string) {
    process.chdir(this._dir)
    const sandbox = {
      require
    }
    vm.createContext(sandbox)
    const res = vm.runInContext(sourceCode, sandbox)
    console.log(res)
  }
}
