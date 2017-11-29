import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/continuelist'
import 'codemirror/addon/edit/matchbrackets'
import * as React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { Heading, Input } from 'rebass'
import { TopicReferenceProps } from './index'

export default class TopicReferenceComponent extends React.Component<TopicReferenceProps> {
  public render() {
    const options = {
      autoCloseBrackets: true,
      autoCloseTags: true,
      autoFocus: true,
      emoji: true,
      extraKeys: {
        Enter: 'newlineAndIndentContinueMarkdownList'
      },
      lineNumbers: true,
      matchBrackets: true,
      matchTags: true,
      mode: 'gfm',
      theme: 'dracula'
    }
    return (
      <div>
        <Heading>トピック</Heading>
        <Input value={this.props.topicReference.label} onChange={e => this.props.editLabel(e.target.value)} />
        <CodeMirror
          onBeforeChange={(editor, data, value) => this.props.editText(value)}
          value={this.props.topicReference.text}
          options={options}
        />
      </div>
    )
  }
}
