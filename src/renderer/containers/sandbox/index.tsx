import * as React from 'react'
import Editor from 'react-ace'
import { Button, Textarea } from 'rebass'

import { connector, Props } from '../connector'

class SandboxComponent extends React.Component<Props> {
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
        <Editor value={this.props.sandbox.code} onChange={value => this.props.act.sandbox.editCode(value)} />
        <Button onClick={() => this.props.act.sandbox.run()} children="RUN" />
      </div>
    )
  }
}

export default connector(SandboxComponent)