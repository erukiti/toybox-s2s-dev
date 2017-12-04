import * as React from 'react'
import { connector, Props } from '../connector'

class TopicListComponent extends React.Component<Props> {
  public render() {
    const topics = this.props.topicList.topics.map(topic => {
      return (
        <div key={topic.uuid}>
          <span>{topic.label}</span>
          <button onClick={() => this.props.act.topicList.remove(topic.uuid)}>remove</button>
          <button onClick={() => this.props.act.topicList.startRef(topic.uuid)}>ref</button>
        </div>
      )
    })

    let topicEditor = <div />
    if (this.props.topicList.editing) {
      topicEditor = (
        <div>
          <input
            type="text"
            onChange={ev => this.props.act.topicList.editLabel(ev.target.value)}
            value={this.props.topicList.editing.label}
          />
          <button onClick={() => this.props.act.topicList.done()}>Submit</button>
          <button onClick={() => this.props.act.topicList.cancel()}>cancel</button>
        </div>
      )
    }

    return (
      <div>
        {topics}
        <hr />
        <button onClick={() => this.props.act.topicList.newTopic()}>new</button>
        {topicEditor}
      </div>
    )
  }
}

export default connector(TopicListComponent)
