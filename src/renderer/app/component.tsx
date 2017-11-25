import * as React from 'react'
import { AppProps } from './index'
import TopicList from '../topic-list'
import Working from '../working'

import { Provider, Flex, Box } from 'rebass'


export default class AppComponent extends React.Component<AppProps> {
  render() {
    const theme = {
      font: '"Noto Sans Japanese"',
      monospace: 'Ricrty Dimished Discord, Ricty Dimished, "MyricaM M"'
    }
    return (
      <Provider theme={theme}>
        <Flex>
          <Box w={0.8} mx={2}>
            <Working />
          </Box>
          <Box w={0.2} mx={2}>
            <TopicList />
            <hr />
          </Box>
        </Flex>
      </Provider>
    )
  }
}
