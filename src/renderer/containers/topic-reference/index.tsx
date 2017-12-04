import * as React from 'react'
import Editor from 'react-ace'
import { Box, Flex, Heading, Input } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

requireAllAcePlugins()

class TopicReferenceComponent extends React.Component<Props> {
  public render() {
    return (
      <Flex direction="column" style={{ height: '100%' }}>
        <Box>
          <Heading>トピック</Heading>
          <Input
            value={this.props.topicReference.label}
            onChange={e => this.props.act.topicReference.editLabel(e.target.value)}
          />
        </Box>
        <Box flex="1">
          <Editor
            onChange={value => this.props.act.topicReference.editText(value)}
            value={this.props.topicReference.text}
            mode="markdown"
            theme="textmate"
            width="100%"
            height="100%"
            focus={true}
            wrapEnabled={true}
          />
        </Box>
      </Flex>
    )
  }
}

export default connector(TopicReferenceComponent)
