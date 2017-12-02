import * as React from 'react'
import Editor from 'react-ace'
import { Button, Textarea } from 'rebass'

import { SandboxProps } from './index'

export default class SandboxComponent extends React.Component<SandboxProps> {
  public render() {
    const histories = this.props.sandbox.histories.map((history, index) => {
      const date = new Date(history.date)
      return (
        <div key={index}>
          <span>
            [{history.count}] {date.toLocaleTimeString()}
          </span>
          <code>{history.code}</code>
          <pre>{history.result || 'undefined'}</pre>
        </div>
      )
    })
    return (
      <div>
        <div>JavaScript Sandbox</div>
        {histories}
        <Editor value={this.props.sandbox.code} onChange={value => this.props.editCode(value)} />
        <Button onClick={() => this.props.run()} children="RUN" />
      </div>
    )
  }
}
