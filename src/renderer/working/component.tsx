import * as React from 'react'
import { WorkingProps } from './index'
const assert = require('assert')
const path = require('path')
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/continuelist'

const bulk = require('bulk-require')
bulk(path.resolve(path.join(path.dirname(require.resolve('codemirror')), '..')), 'mode/*/*.js')

export default class WorkingComponent extends React.Component<WorkingProps> {
  render() {
    if (this.props.topicList.topics.length === 0) {
      return <div />
    }

    const doneTasks = this.props.working.doneTasks.map((task, i) => {
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
          <span>{task.desc}</span>: <span>{labels}</span>
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

    const topicSelect = this.props.topicList.topics.map(topic => {
      const checked = this.props.working.topicIds.includes(topic.uuid)
      return (
        <span key={topic.uuid}>
          <input type="checkbox" checked={checked} onChange={() => this.props.checkTopicId(topic.uuid)} /> {topic.label}
        </span>
      )
    })

    const doneDisabled = this.props.topicList.topics.length === 0
    const options = {
      mode: 'gfm',
      theme: 'dracula',
      lineNumbers: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      matchTags: true,
      autoCloseTags: true,
      emoji: true,
      extraKeys: {
        'Enter': 'newlineAndIndentContinueMarkdownList'
      },
    }
    return (
      <div>
        <input type="text" onChange={ev => this.props.editDesc(ev.target.value)} value={this.props.working.desc} />
        {topicSelect}
        <button onClick={() => this.props.done()} disabled={doneDisabled}>
          done
        </button>
        <CodeMirror
          onBeforeChange={(editor, data, value) => this.props.editMemo(value)}
          value={this.props.working.memo}
          options={options}
        />
        <hr />
        {doneTasks}
      </div>
    )
  }
}
