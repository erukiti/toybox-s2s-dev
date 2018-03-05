import * as vm from 'vm'

import { Setup } from './setup'

class Toybox {
  private dir: string
  private setup: Setup

  constructor(dir, opts: any = {}) {
    this.dir = dir
    this.setup = new Setup(dir, opts)
  }


  public run(sourceCode: string) {
    const oldDir = process.cwd()
    process.chdir(this.dir)
    const sandbox = {
      require
    }
    vm.createContext(sandbox)
    const res = vm.runInContext(sourceCode, sandbox)
    console.log(res)
  }
}
