import { store } from '../../'
import { Sandbox } from '../../../sandbox'
import { ActionType, SandboxDispatchAction } from '../actions'

export class SandboxAction extends SandboxDispatchAction {
  private _sandbox: Sandbox

  public _first() {
    this._sandbox = new Sandbox()
  }

  public start() {}

  public end() {
    this._sandbox = null
  }

  public run() {
    const { count, result } = this._sandbox.run(store.getState().sandbox.code)
    this._dispatch.sandbox.run(count, result, Date.now())
  }
}
