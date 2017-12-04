import * as React from 'react'

import { connector, Props } from '../connector'

class BoardComponent extends React.Component<Props> {
  public render() {
    const boards = this.props.board.boards.map(board => {
      return (
        <div key={board.uuid}>
          <span>{board.label}</span>
          <button onClick={() => this.props.act.board.startRef(board.uuid)}>ref</button>
        </div>
      )
    })
    return (
      <div>
        {boards}
        <button onClick={() => this.props.act.board.create()}>new</button>
      </div>
    )
  }
}

export default connector(BoardComponent)
