import * as React from 'react'
import { Box, Checkbox, Flex, Heading, Input } from 'rebass'
import { StoryProps } from './index'
const ReactQuill = require('react-quill')

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
    const style = {
      height: '100%'
    }
    return (
      <Flex direction="column" style={style}>
        <Box>
          <div>タスク</div>
          <Input value={story.desc} onChange={e => this.props.editDesc(e.target.value)} />
          {topicSelect}
        </Box>
        <Box flex="1">
          <ReactQuill onChange={value => this.props.editMemo(value)} value={story.memo} theme="snow" />
        </Box>
      </Flex>
    )
  }
}
