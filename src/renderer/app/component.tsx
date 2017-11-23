import * as React from 'react'
import { AppProps } from './index'
import TopicList from '../topic-list'
import Working from '../working'

export default class AppComponent extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <TopicList />
        <Working />
      </div>
    )
  }
}
