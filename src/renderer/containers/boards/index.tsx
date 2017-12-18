import * as React from 'react'

import { connector, Props } from '../connector'

const boardRender: React.StatelessComponent<Props> = props => {
  const boards = props.boards.boards.map(board => {
    return (
      <div key={board.uuid}>
        <span>{board.label}</span>
        <button onClick={() => props.act.boards.startRef(board.uuid)}>ref</button>
      </div>
    )
  })
  return (
    <div>
      {boards}
      <button onClick={() => props.act.boards.create()}>new</button>
    </div>
  )
}

export default connector(boardRender)
