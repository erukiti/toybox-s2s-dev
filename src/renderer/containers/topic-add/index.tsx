import * as React from 'react'
import { Button, Input } from 'rebass'
import { connector, Props } from '../connector'

class TopicAddComponent extends React.Component<Props> {
  public render() {
    const act = this.props.act.topicAdd
    const { label, text } = this.props.topicAdd
    return (
      <div>
        <Input onChange={ev => this.props.act.topicAdd.editLabel(ev.target.value)} value={label} />
        <Button onClick={() => this.props.act.topicAdd.submit(label, text)} children="Submit" f={1} />
        <Button onClick={() => this.props.act.topicAdd.clear()} children="Cancel" f={1} />
      </div>
    )
  }
}

export default connector(TopicAddComponent)
