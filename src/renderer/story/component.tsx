import * as brace from 'brace'
import * as fs from 'fs'
import * as path from 'path'
import * as React from 'react'
import Editor from 'react-ace'
import { Box, Checkbox, Flex, Heading, Input } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'

requireAllAcePlugins()

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
          <Editor
            mode="markdown"
            theme="textmate"
            width="100%"
            height="100%"
            onChange={value => this.props.editMemo(value)}
            value={story.memo}
            focus={true}
            wrapEnabled={true}
          />
        </Box>
      </Flex>
    )
  }
}
