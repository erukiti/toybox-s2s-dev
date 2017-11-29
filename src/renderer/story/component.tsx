import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/continuelist'
import 'codemirror/addon/edit/matchbrackets'
import * as React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { Checkbox, Heading, Input } from 'rebass'
import { StoryProps } from './index'

export default class StoryComponent extends React.Component<StoryProps> {
  public render() {
    const { uuid } = this.props.story
    if (!uuid) {
      return <div />
    }
    const story = this.props.stories.stories.find(story2 => story2.uuid === uuid)

    const topicSelect = this.props.topicList.topics.map(topic => {
      const checked = story.topicIds.includes(topic.uuid)
      return (
        <span key={topic.uuid}>
          <Checkbox checked={checked} onChange={() => this.props.checkTopicId(topic.uuid)} /> {topic.label}
        </span>
      )
    })

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
        <div>タスク</div>
        <Input value={story.desc} onChange={e => this.props.editDesc(e.target.value)} />
        {topicSelect}
        <CodeMirror
          onBeforeChange={(editor, data, value) => this.props.editMemo(value)}
          value={story.memo}
          options={options}
        />
      </div>
    )
  }
}
