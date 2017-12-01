import * as React from 'react'
import Sandbox from '../sandbox'
import Stories from '../stories'
import Story from '../story'
import TopicList from '../topic-list'
import TopicReference from '../topic-reference'
import { AppProps } from './index'

import { Box, Flex, Provider } from 'rebass'

export default class AppComponent extends React.Component<AppProps> {
  public render() {
    const theme = {
      font: '"Noto Sans Japanese"',
      monospace: 'Ricrty Dimished Discord, Ricty Dimished, "MyricaM M"',
      fontSizes: [10, 16, 24, 36, 48, 72]
    }

    const pane1 = <div />

    let pane2 = <div />
    switch (this.props.app.mode) {
      case 'topic': {
        pane2 = <TopicReference />
        break
      }
      case 'story': {
        pane2 = <Story />
        break
      }
      case 'sandbox': {
        pane2 = <Sandbox />
        break
      }
    }

    const style = { height: '100vh' }
    return (
      <Provider theme={theme}>
        <Flex>
          <Box w={0.7} mx={2} style={style}>
            {pane2}
          </Box>
          <Box w={0.3} mx={2} style={style}>
            <TopicList />
            <Stories />
          </Box>
        </Flex>
      </Provider>
    )
  }
}
