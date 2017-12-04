import { ActionType } from '../actions'
interface BoardListItem {
  uuid: string
  label: string
}
export interface BoardListState {
  list: BoardListItem[]
}
const initialState: BoardListState = {
  list: []
}

const load = (_state: BoardListState, boards: any[]): BoardListState => {
  return {
    list: boards.map(b => ({
      uuid: b.uuid,
      label: b.label
    }))
  }
}

export default function BoardListReducer(state: BoardListState = initialState, action: ActionType): BoardListState {
  switch (action.type) {
    case 'BOARD_LIST_LOAD':
      return load(state, action.payload.boards)

    default:
      return state
  }
}
