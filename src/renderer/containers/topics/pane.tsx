import * as React from 'react'

import Editor from 'react-ace'
import { Box, Flex, Heading, Input } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

requireAllAcePlugins()

interface OwnProps {
  uuid: string
}

class TopicsPane extends React.Component<Props & OwnProps> {
  public render() {
    const { uuid } = this.props
    const topic = this.props.topics.topics.find(v => v.uuid === uuid)
    return (
      <Flex direction="column" style={{ height: '100%' }}>
        <Box>
          <span>トピック</span>
          <Input value={topic.label} onChange={v => this.props.act.topics.editLabel(uuid, v.target.value)} />
        </Box>
        <Box flex="1">
          <Editor
            onChange={v => this.props.act.topics.editText(uuid, v)}
            value={topic.text}
            mode="markdown"
            theme="textmate"
            width="100%"
            height="100%"
            focus={true}
            wrapEnabled={true}
            editorProps={{
              $blockScrolling: Infinity
            }}
          />
        </Box>
      </Flex>
    )
  }
}

export default connector(TopicsPane)
