import { store } from '../'
import { Sandbox } from '../../sandbox'
import { Dispatcher } from '../actions'

export default class SandboxActionCreator {
  public _dispatch: Dispatcher
  public sandbox: Sandbox

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  public _first() {
    this.sandbox = new Sandbox()
  }

  public start() {}

  public end() {
    this.sandbox = null
  }

  public editCode(code: string) {
    this._dispatch.sandbox.editCode(code)
  }

  public run() {
    const { count, result } = this.sandbox.run(store.getState().sandbox.code)
    this._dispatch.sandbox.run(count, result, Date.now())
  }
}
