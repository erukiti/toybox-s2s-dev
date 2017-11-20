import actions, { Dispatch } from '../actions'
import { Topic } from '../../handling/topic'

export default class TopicListAction {
  dispatch: Dispatch = null

  add(label: string, text: string) {
    this.dispatch({type: actions.TOPIC_LIST_ADD, label, text})
  }

  remove(index: number) {
    this.dispatch({type: actions.TOPIC_LIST_REMOVE, index})
  }
}
