import * as React from 'react'
// import {WorkingProps} from './index'
const assert = require('assert')

export default class WorkingComponent extends React.Component<any> {
  render() {
    if (this.props.topicList.topics.length === 0) {
      return <div></div>
    }

    const doneTasks = this.props.working.doneTasks.map((task, i) => {
      const topic = this.props.topicList.topics.find(topic => topic.uuid === task.topicId)
      assert(topic != null)
      return (
        <div key={i}>
          <span>{task.desc}</span>:<span>{topic.label}</span>
        </div>
      )
    })
    const topicOptions = this.props.topicList.topics.map(topic => {
      return (
        <option value={topic.uuid} key={topic.uuid}>
          {topic.label}
        </option>
      )
    })
    const doneDisabled = this.props.topicList.topics.length === 0

    return (
      <div>
        <input type="text" onChange={ev => this.props.editDesc(ev.target.value)} value={this.props.working.desc} />
        <select value={this.props.topicId} onChange={ev => this.props.changeTopicId(ev.target.value)}>
          {topicOptions}
        </select>
        <button onClick={() => this.props.done()} disabled={doneDisabled}>done</button>
        <textarea onChange={ev => this.props.editMemo(ev.target.value)} value={this.props.working.memo} />
        <hr/>
        {doneTasks}
      </div>
    )
  }
}
