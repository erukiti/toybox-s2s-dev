import * as React from 'react'

import Editor from 'react-ace'
import { Box, Button, Checkbox, Flex, Heading, Input } from 'rebass'

import { Board } from '../../../types'
import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

interface OwnProps {
  uuid: string
}

class BoardPane extends React.Component<Props & OwnProps> {
  public render() {
    const { uuid, topics, act, itemText } = this.props
    const board = this.props.boards.boards.find(v => v.uuid === uuid)
    const topicIds = topics.topics.map(topic => {
      const checked = board.topicIds.includes(topic.uuid)
      return (
        <span key={topic.uuid}>
          <Checkbox checked={checked} onClick={() => act.boards.changeTopicsIds(uuid, topic.uuid)} />
          {topic.label}
        </span>
      )
    })

    const items = board.itemIds.map(itemId => {
      const item = itemText.items.find(v => v.uuid === itemId)
      const showGutter = item.lang !== 'markdown'
      return (
        <Box key={itemId}>
          <Editor
            onChange={v => act.itemText.editText(itemId, v)}
            value={item.text}
            mode={item.lang}
            theme="textmate"
            minLines={10}
            width="100%"
            height="300px"
            wrapEnabled={true}
            showGutter={showGutter}
          />
        </Box>
      )
    })

    const handleAddItemText = () => {
      const itemId = act.itemText.create('markdown')
      act.boards.addItem(uuid, itemId)
    }

    return (
      // <Flex direction="column" style={{ height: '100%' }}>
      <Box>
        <Box>
          <span>ボード</span>
          <span>{topicIds}</span>
          <Input value={board.label} onChange={ev => this.props.act.boards.editLabel(uuid, ev.target.value)} />
        </Box>
        {items}
        <Box>
          <Button onClick={() => handleAddItemText()} children={'ADD'} />
        </Box>
      </Box>
      // </Flex>
    )
  }
}

export default connector(BoardPane)
