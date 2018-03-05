import { store } from '../../'
import { Sandbox } from '../../../sandbox'
import { ActionType, SandboxDispatchAction } from '../actions'

export class SandboxAction extends SandboxDispatchAction {
  private _sandbox: Sandbox = new Sandbox()

  public _first() {}

  public start() {}

  public end() {
    // this._sandbox = null
  }

  public run() {
    console.log(this._sandbox)
    console.log(store.getState())
    const { count, result } = this._sandbox.run(store.getState().sandbox.code)
    this._dispatch.sandbox.run(count, result, Date.now())
  }
}
