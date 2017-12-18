import * as React from 'react'
import { connector, Props } from '../connector'

const topicsRender: React.StatelessComponent<Props> = props => {
  const topics = props.topics.topics.map(topic => {
    return (
      <div key={topic.uuid} onClick={() => props.act.topics.startRef(topic.uuid)}>
        <span>{topic.label}</span>
      </div>
    )
  })

  return <div>{topics}</div>
}

export default connector(topicsRender)
