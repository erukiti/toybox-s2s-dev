import * as React from 'react'
import {SandboxProps} from './index'
import { Textarea, Button } from 'rebass'

export default class SandboxComponent extends React.Component<SandboxProps> {
  render() {
    const histories = this.props.sandbox.histories.map((history, index) => {
      const date = new Date(history.date)
      return <div key={index}>
        <span>[{history.count}] {date.toLocaleTimeString()}</span>
        <code>{history.code}</code>
        <pre>{history.result || 'undefined'}</pre>
      </div>
    })
    return <div>
      <div>JavaScript Sandbox</div>
      {histories}
      <Textarea value={this.props.sandbox.code} onChange={e => this.props.editCode(e.target.value)}/>
      <Button onClick={() => this.props.run()} children='RUN' />
    </div>
  }
}
