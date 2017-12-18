import * as React from 'react'
import Editor from 'react-ace'
import { Button, Textarea } from 'rebass'

import { connector, Props } from '../connector'

const sandboxRender: React.StatelessComponent<Props> = props => {
  const histories = props.sandbox.histories.map((history, index) => {
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
      <Editor value={props.sandbox.code} onChange={value => props.act.sandbox.editCode(value)} />
      <Button onClick={() => props.act.sandbox.run()} children="RUN" />
    </div>
  )
}

export default connector(sandboxRender)
