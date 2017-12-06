import * as React from 'react'
import { Button } from 'rebass'

import { getAcePluginNames, requireAllAcePlugins } from '../../utils'
import { connector, Props } from '../connector'

class Items extends React.Component<Props> {
  public render() {
    console.log(this.props.itemText.items)
    const items = this.props.itemText.items.map(item => {
      return (
        <div key={item.uuid}>
          <span>{item.label}</span>
          <span>{item.lang}</span>
          <Button onClick={() => this.props.act.itemText.start(item.uuid)}>Edit</Button>
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
