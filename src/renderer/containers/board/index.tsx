import * as React from 'react'

import { connector, Props } from '../connector'

class BoardComponent extends React.Component<Props> {
  public render() {
    return <div />
  }
}

export default connector(BoardComponent)
