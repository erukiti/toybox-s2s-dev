import { TopicAddDispatchAction } from '../actions'

export class TopicAddAction extends TopicAddDispatchAction {
  public submit(label: string, text: string) {
    this._dispatch.topicList.add(label, text)
    this._dispatch.topicAdd.clear()
  }
}
