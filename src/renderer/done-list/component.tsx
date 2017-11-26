import * as React from 'react'
import {DoneListProps} from './index'
import { Small } from 'rebass'

export default class DoneListComponent extends React.Component<DoneListProps> {
  render() {
    const tasks = this.props.doneList.tasks.map((task, i) => {
      const labels = task.topicIds
        .map(id => {
          const topic = this.props.topicList.topics.find(topic => id === topic.uuid)
          if (topic) {
            return topic.label
          } else {
            return `unknown topic: ${topic.uuid}`
          }
        })
        .join(', ')

      return (
        <div key={i}>
          <span>{task.desc}</span>: <Small>{labels}</Small>
          <button onClick={() => this.props.refTask(task.uuid)}>
            ref
          </button>
        </div>
      )
    })

    return <div>
      {tasks}      
    </div>
  }
}
