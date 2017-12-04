import { AppDispatchAction } from '../actions'

console.log(AppDispatchAction)

export class AppAction extends AppDispatchAction {
  public hoge() {
    console.log('hoge')
  }
}
