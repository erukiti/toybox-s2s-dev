import * as assert from 'assert'
import * as React from 'react'
import { Box, Flex, Provider } from 'rebass'

// import TopicReference from '../../components/topic-reference'
import Board from '../board'
import BoardPane from '../board/pane'
import { connector, Props } from '../connector'
import Sandbox from '../sandbox'
import TopicAdd from '../topic-add'
import TopicList from '../topic-list'
import TopicPane from '../topic-list/pane'

class AppComponent extends React.Component<Props> {
  public render() {
    const theme = {
      font: '"Noto Sans Japanese"',
      monospace: 'Ricrty Dimished Discord, Ricty Dimished, "MyricaM M"',
      fontSizes: [10, 16, 24, 36, 48, 72]
    }

    const style = { height: '100vh' }

    const panes = this.props.app.panes.map(pane => {
      if (pane.tabs.length === 0) {
        return <Box w={1} />
      }
      const tab = pane.tabs[pane.index]
      switch (tab.mode) {
        case 'board': {
          return (
            <Box w={1} style={style}>
              <BoardPane uuid={tab.uuid} />
            </Box>
          )
        }
        case 'topic': {
          return (
            <Box w={1} style={style}>
              <TopicPane uuid={tab.uuid} />
            </Box>
          )
        }
      }
    })
    panes.push(
      <Box w={0.3} mx={2} style={style}>
        <TopicAdd />
        <TopicList />
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
