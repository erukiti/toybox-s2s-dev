import * as React from 'react'

import { connector, Props } from '../connector'

class Boards extends React.Component<Props> {
  public render() {
    const boards = this.props.boards.boards.map(board => {
      return (
        <div key={board.uuid}>
          <span>{board.label}</span>
          <button onClick={() => this.props.act.boards.startRef(board.uuid)}>ref</button>
        </div>
      )
    })
    return (
      <div>
        {boards}
        <button onClick={() => this.props.act.boards.create()}>new</button>
      </div>
    )
  }
}

export default connector(Boards)
