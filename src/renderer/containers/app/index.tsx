import * as assert from 'assert'
import * as React from 'react'
import { Box, Flex, Provider, TabItem, Tabs } from 'rebass'

// import TopicReference from '../../components/topic-reference'
import Board from '../boards'
import BoardPane from '../boards/pane'
import { connector, Props } from '../connector'
import Sandbox from '../sandbox'
import TopicAdd from '../topic-add'
import Topics from '../topics'
import TopicPane from '../topics/pane'

class AppComponent extends React.Component<Props> {
  public render() {
    const theme = {
      font: '"Noto Sans Japanese"',
      monospace: 'Ricrty Dimished Discord, Ricty Dimished, "MyricaM M"',
      fontSizes: [10, 16, 24, 36, 48, 72]
    }

    const style = { height: '100vh' }

    const panes = this.props.app.panes.map((pane, paneIndex) => {
      if (pane.tabs.length === 0) {
        return <Box w={1} />
      }
      const tab = pane.tabs[pane.index]
      let p
      const tabs = pane.tabs.map((v, index) => {
        let name
        switch (v.mode) {
          case 'board': {
            name = this.props.boards.boards.find(board => board.uuid === v.uuid).label
            if (index === pane.index) {
              p = <BoardPane uuid={tab.uuid} />
            }
            break
          }
          case 'topic': {
            name = this.props.topics.topics.find(topic => topic.uuid === v.uuid).label
            if (index === pane.index) {
              p = <TopicPane uuid={tab.uuid} />
            }
            break
          }
        }

        if (index === pane.index) {
          return <TabItem active children={name} key={v.uuid} />
        } else {
          return <TabItem children={name} onClick={() => this.props.act.app.selectTab(paneIndex, index)} key={v.uuid} />
        }
      })

      return (
        <Box w={1} style={style}>
          <Tabs>{tabs}</Tabs>
          {p}
        </Box>
      )
    })

    panes.push(
      <Box w={0.3} mx={2} style={style}>
        <TopicAdd />
        <Topics />
        <hr />
        <Board />
      </Box>
    )

    return (
      <Provider theme={theme}>
        <Flex>{panes.map((pane, index) => ({ ...pane, key: index }))}</Flex>
      </Provider>
    )
  }
}

export default connector(AppComponent)
