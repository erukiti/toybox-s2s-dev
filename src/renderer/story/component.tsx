import * as React from 'react'
import { StoryProps } from './index'
import { Input, Heading, Checkbox } from 'rebass'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/continuelist'

export default class StoryComponent extends React.Component<StoryProps> {
  render() {
    const { uuid } = this.props.story
    if (!uuid) {
      return <div />
    }
    const story = this.props.stories.stories.find(story => story.uuid === uuid)

    const topicSelect = this.props.topicList.topics.map(topic => {
      const checked = story.topicIds.includes(topic.uuid)
      return (
        <span key={topic.uuid}>
          <Checkbox checked={checked} onChange={() => this.props.checkTopicId(topic.uuid)} /> {topic.label}
        </span>
      )
    })

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
        Enter: 'newlineAndIndentContinueMarkdownList'
      }
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
