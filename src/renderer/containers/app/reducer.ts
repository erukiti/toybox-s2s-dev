import { AppMode } from '../../../types'
import { ActionType } from '../actions'
export interface AppState {
  mode: string
}
const initialState: AppState = {
  mode: null
}

const changeMode = (_state: AppState, mode: string): AppState => {
  return {
    ..._state,
    mode
  }
}

export default function AppReducer(state: AppState = initialState, action: ActionType): AppState {
  switch (action.type) {
    case 'APP_CHANGE_MODE':
      return changeMode(state, action.payload.mode)

    default:
      return state
  }
}
