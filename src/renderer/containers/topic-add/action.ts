import { TopicAddDispatchAction } from '../actions'

export class TopicAddAction extends TopicAddDispatchAction {
  public submit(label: string, text: string) {
    this._dispatch.topics.add(label, text)
    this._dispatch.topicAdd.clear()
  }
}
