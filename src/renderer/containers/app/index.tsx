import * as assert from 'assert'
import * as React from 'react'
import { Box, Flex, Provider, TabItem, Tabs } from 'rebass'

// import TopicReference from '../../components/topic-reference'
import Board from '../boards'
import BoardPane from '../boards/pane'
import { connector, Props } from '../connector'
import Items from '../item-text'
import ItemPane from '../item-text/pane'
import Sandbox from '../sandbox'
import TopicAdd from '../topic-add'
import Topics from '../topics'
import TopicPane from '../topics/pane'

const appRender: React.StatelessComponent<Props> = props => {
  const theme = {
    font: '"Noto Sans Japanese"',
    monospace: 'Ricrty Dimished Discord, Ricty Dimished, "MyricaM M"',
    fontSizes: [10, 16, 24, 36, 48, 72]
  }

  const style = { height: '100vh' }

  const panes = props.app.panes.map((pane, paneIndex) => {
    if (pane.tabs.length === 0) {
      return <Box w={1} />
    }
    const tab = pane.tabs[pane.index]
    let p
    const tabs = pane.tabs.map((v, index) => {
      let name
      switch (v.mode) {
        case 'board': {
          name = props.boards.boards.find(board => board.uuid === v.uuid).label
          if (index === pane.index) {
            p = BoardPane
          }
          break
        }
        case 'topic': {
          name = props.topics.topics.find(topic => topic.uuid === v.uuid).label
          if (index === pane.index) {
            p = TopicPane
          }
          break
        }
        case 'item': {
          name = props.itemText.items.find(item => item.uuid === v.uuid).label
          if (index === pane.index) {
            p = ItemPane
          }
        }
      }

      if (index === pane.index) {
        return <TabItem active children={name} key={v.uuid} />
      } else {
        return <TabItem children={name} onClick={() => props.act.app.selectTab(paneIndex, index)} key={v.uuid} />
      }
    })

    return (
      <Box w={1}>
        <Flex direction="column" style={style}>
          <Tabs>{tabs}</Tabs>
          <Box is={p} uuid={tab.uuid} flex="1" />
        </Flex>
      </Box>
    )
  })

  panes.push(
    <Box w={0.3} mx={2} style={style}>
      <Box is={TopicAdd} />
      <Box is={Topics} />
      <hr />
      <Box is={Items} />
    </Box>
  )

  return (
    <Provider theme={theme}>
      <Sandbox />
      {/* <Flex>{panes.map((pane, index) => ({ ...pane, key: index }))}</Flex> */}
    </Provider>
  )
}

export default connector(appRender)
