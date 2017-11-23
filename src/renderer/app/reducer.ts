import { ActionType } from '../actions'
export type AppState = {}
const initialState: AppState = {}
export default function AppReducer(state: AppState = initialState, action: ActionType): AppState {
  switch (action.type) {
    default:
      return state
  }
}
