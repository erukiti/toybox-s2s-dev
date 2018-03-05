import * as vm from 'vm'

import { RunnerInfra } from './index'

export class VmRunner implements RunnerInfra {
  private _sandbox: any = {}
  constructor(opts) {
    this.init()
  }
  public init(sandbox?: any) {
    if (sandbox) {
      this._sandbox = { ...sandbox }
    } else {
      this._sandbox = { require }
    }
    vm.createContext(this._sandbox)
  }

  public runCode(sourceCode: string) {
    const res = vm.runInContext(sourceCode, this._sandbox)
    console.log(res)
  }
}
