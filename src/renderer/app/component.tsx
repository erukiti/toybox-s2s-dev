import * as React from 'react'
import { AppProps } from './index'
import TopicList from '../topic-list'
import Stories from '../stories'
import TopicReference from '../topic-reference'
import Story from '../story'
import Sandbox from '../sandbox'

import { Provider, Flex, Box } from 'rebass'


export default class AppComponent extends React.Component<AppProps> {
  render() {
    const theme = {
      font: '"Noto Sans Japanese"',
      monospace: 'Ricrty Dimished Discord, Ricty Dimished, "MyricaM M"',
      fontSizes: [10, 16, 24, 36, 48, 72]
    }

    let pane1 = <div />

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
    return (
      <Provider theme={theme}>
        <Flex>
          <Box w={0.7} mx={2}>
            {pane2}
          </Box>
          <Box w={0.3} mx={2}>
            <TopicList />
            <hr />
            <Stories />
          </Box>
        </Flex>
      </Provider>
    )
  }
}
