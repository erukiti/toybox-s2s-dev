import { ActionType } from '../actions'
const initialState = {
  count: 0
}
export type AppState = typeof initialState

const add = (_state, count: number) => {
  return {
    count: _state.count + count
  }
}

const sub = (_state, count: number) => {
  return {
    count: _state.count - count
  }
}

export default function AppReducer(state: AppState = initialState, action: ActionType) {
  switch (action.type) {
    case 'APP_ADD':
      return add(state, action.payload.count)

    case 'APP_SUB':
      return sub(state, action.payload.count)

    default:
      return state
  }
}
