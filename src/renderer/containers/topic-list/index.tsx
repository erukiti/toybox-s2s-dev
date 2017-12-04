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

    return <div>{topics}</div>
  }
}

export default connector(TopicListComponent)
