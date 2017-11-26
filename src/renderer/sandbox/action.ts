import { store } from '../'
import { Dispatcher } from '../actions'
import { Sandbox } from '../../sandbox'

export default class SandboxActionCreator {
  _dispatch: Dispatcher
  sandbox: Sandbox

  constructor(dispatcher: Dispatcher) {
    this._dispatch = dispatcher
  }

  _first() {
    this.sandbox = new Sandbox()
    
  }

  start() {
  }

  end() {
    this.sandbox = null
  }

  editCode(code: string) {
    this._dispatch.sandbox.editCode(code)
  }

  run() {
    const {count, result} = this.sandbox.run(store.getState().sandbox.code)
    this._dispatch.sandbox.run(count, result, Date.now())
  }

}
