import * as React from 'react'
import {TopicReferenceProps} from './index'
import { Input, Heading } from 'rebass'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/continuelist'

export default class TopicReferenceComponent extends React.Component<TopicReferenceProps> {
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
      <Heading>トピック</Heading>
      <Input value={this.props.topicReference.label} onChange={e => this.props.editLabel(e.target.value)} />
      <CodeMirror
        onBeforeChange={(editor, data, value) => this.props.editText(value)}
        value={this.props.topicReference.text}
        options={options}
      />
    </div>
  }
}
