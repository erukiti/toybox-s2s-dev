import * as React from 'react'
import { AppProps } from './index'
import TopicList from '../topic-list'
import Working from '../working'
import DoneList from '../done-list'
import TopicReference from '../topic-reference'
import TaskReference from '../task-reference'

import { Provider, Flex, Box } from 'rebass'


export default class AppComponent extends React.Component<AppProps> {
  render() {
    const theme = {
      font: '"Noto Sans Japanese"',
      monospace: 'Ricrty Dimished Discord, Ricty Dimished, "MyricaM M"',
      fontSizes: [10, 16, 24, 36, 48, 72]
    }
    let pane2 = <div />
    switch (this.props.app.mode) {
      case 'topic': {
        pane2 = <TopicReference />
        break
      }
      case 'task': {
        pane2 = <TaskReference />
        break
      }
    }
    return (
      <Provider theme={theme}>
        <Flex>
          <Box w={0.4} mx={2}>
            <Working />
          </Box>
          <Box w={0.4} mx={2}>
            {pane2}
          </Box>
          <Box w={0.2} mx={2}>
            <TopicList />
            <hr />
            <DoneList />
          </Box>
        </Flex>
      </Provider>
    )
  }
}
