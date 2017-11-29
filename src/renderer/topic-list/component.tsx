import * as React from 'react'
import { TopicListProps } from './index'

export default class TopicListComponent extends React.Component<TopicListProps> {
  public render() {
    const topics = this.props.topicList.topics.map(topic => {
      return (
        <div key={topic.uuid}>
          <span>{topic.label}</span>
          <button onClick={() => this.props.remove(topic.uuid)}>remove</button>
          <button onClick={() => this.props.startRef(topic.uuid)}>ref</button>
        </div>
      )
    })

    let topicEditor = <div />
    if (this.props.topicList.editing) {
      topicEditor = (
        <div>
          <input
            type="text"
            onChange={ev => this.props.editLabel(ev.target.value)}
            value={this.props.topicList.editing.label}
          />
          <button onClick={() => this.props.done()}>Submit</button>
          <button onClick={() => this.props.cancel()}>cancel</button>
        </div>
      )
    }

    return (
      <div>
        {topics}
        <hr />
        <button onClick={() => this.props.newTopic()}>new</button>
        {topicEditor}
      </div>
    )
  }
}
