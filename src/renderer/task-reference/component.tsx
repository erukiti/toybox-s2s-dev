import * as React from 'react'
import {TaskReferenceProps} from './index'
import { Input, Heading } from 'rebass'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/continuelist'

export default class TaskReferenceComponent extends React.Component<TaskReferenceProps> {
  render() {
    const options = {
      mode: 'gfm',
      theme: 'dracula',
      lineNumbers: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      matchTags: true,
      autoCloseTags: true,
      emoji: true,
      autoFocus: true,
      extraKeys: {
        'Enter': 'newlineAndIndentContinueMarkdownList'
      },
    }

    return <div>
      <Heading>タスク</Heading>
      <Input value={this.props.taskReference.desc} onChange={e => this.props.editDesc(e.target.value)} />
      <CodeMirror
        onBeforeChange={(editor, data, value) => this.props.editMemo(value)}
        value={this.props.taskReference.memo}
        options={options}
      />
    </div>
  }
}
