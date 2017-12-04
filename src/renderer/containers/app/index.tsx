import * as React from 'react'

import { connector, Props } from '../connector'
import Sandbox from '../sandbox'
import TopicList from '../topic-list'
import TopicReference from '../topic-reference'

import { Box, Flex, Provider } from 'rebass'

class AppComponent extends React.Component<Props> {
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
          </Box>
        </Flex>
      </Provider>
    )
  }
}

export default connector(AppComponent)
