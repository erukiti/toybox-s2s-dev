import * as React from 'react'
import { connector, Props } from '../connector'

class TopicListComponent extends React.Component<Props> {
  public render() {
    const topics = this.props.topics.topics.map(topic => {
      return (
        <div key={topic.uuid} onClick={() => this.props.act.topics.startRef(topic.uuid)}>
          <span>{topic.label}</span>
        </div>
      )
    })

    return <div>{topics}</div>
  }
}

export default connector(TopicListComponent)
