import * as React from 'react'
// import {AppProps} from './index'

export default class AppComponent extends React.Component<any> {
  render() {
    return <div>
        <div>{this.props.app.count}</div>
        <button onClick={() => this.props.add(1)}>ADD</button>
        <button onClick={() => this.props.sub(1)}>SUB</button>
    </div>
  }
}
