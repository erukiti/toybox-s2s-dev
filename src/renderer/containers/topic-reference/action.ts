import { store } from '../../'
import { repositories } from '../../../repository'
import { TopicReferenceDispatchAction } from '../actions'

export class TopicReferenceAction extends TopicReferenceDispatchAction {
  public editLabel(label: string) {
    const { uuid } = store.getState().topicReference
    this._dispatch.topicReference.editLabel(label)
    this._dispatch.topicList.updateLabel(uuid, label)
    const topic = store.getState().topicList.topics.find(v => v.uuid === uuid)
    repositories.topic.update(topic)
  }

  public editText(text: string) {
    const { uuid } = store.getState().topicReference
    this._dispatch.topicReference.editText(text)
    this._dispatch.topicList.updateText(uuid, text)
    const topic = store.getState().topicList.topics.find(v => v.uuid === uuid)
    repositories.topic.update(topic)
  }
}
