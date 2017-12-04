import * as React from 'react'

import Editor from 'react-ace'
import { Box, Flex, Heading, Input } from 'rebass'

import { Board } from '../../../types'
import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

interface OwnProps {
  uuid: string
}

class BoardPane extends React.Component<Props & OwnProps> {
  public render() {
    const { uuid } = this.props
    const board = this.props.board.boards.find(v => v.uuid === uuid)
    return (
      <Flex direction="column" style={{ height: '100%' }}>
        <Box>
          <span>ボード</span>
          <Input value={board.label} onChange={ev => this.props.act.board.editLabel(uuid, ev.target.value)} />
        </Box>
      </Flex>
    )
  }
}

export default connector(BoardPane)
