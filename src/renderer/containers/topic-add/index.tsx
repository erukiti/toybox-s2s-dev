import * as React from 'react'
import { Button, Input } from 'rebass'
import { connector, Props } from '../connector'

const topicAddRender: React.StatelessComponent<Props> = props => {
  const act = props.act.topicAdd
  const { label, text } = props.topicAdd
  return (
    <div>
      <Input onChange={ev => props.act.topicAdd.editLabel(ev.target.value)} value={label} />
      <Button onClick={() => props.act.topicAdd.submit(label, text)} children="Submit" f={1} />
      <Button onClick={() => props.act.topicAdd.clear()} children="Cancel" f={1} />
    </div>
  )
}

export default connector(topicAddRender)
