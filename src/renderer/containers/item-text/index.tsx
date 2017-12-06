import * as React from 'react'
import { Badge, Button } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

class Items extends React.Component<Props> {
  public render() {
    const items = this.props.itemText.items.map(item => {
      return (
        <div key={item.uuid} onClick={() => this.props.act.itemText.start(item.uuid)}>
          <span>{item.label}</span>
          <Badge>{item.lang}</Badge>
        </div>
      )
    })

    return (
      <div>
        <Button onClick={() => this.props.act.itemText.start()}>NEW</Button>
        {items}
      </div>
    )
  }
}

export default connector(Items)
