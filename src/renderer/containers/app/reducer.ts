import { AppMode } from '../../../types'
import { ActionType } from '../actions'
interface Tab {
  mode: string
  uuid: string
}
interface Pane {
  tabs: Tab[]
  index: number
}
export interface AppState {
  panes: Pane[]
}
const initialState: AppState = {
  panes: []
}

const addPane = (_state: AppState): AppState => {
  const panes = [
    ..._state.panes,
    {
      tabs: [],
      index: 0
    }
  ]
  return {
    ..._state,
    panes
  }
}

const open = (_state: AppState, paneIndex: number, mode: string, uuid: string): AppState => {
  const tabs = [
    ..._state.panes[paneIndex].tabs,
    {
      mode,
      uuid
    }
  ]
  const pane = {
    tabs,
    index: tabs.length - 1
  }
  console.log([..._state.panes.splice(0, paneIndex)], pane, [..._state.panes.splice(paneIndex + 1)])
  return {
    ..._state,
    panes: [..._state.panes.splice(0, paneIndex), pane, ..._state.panes.splice(paneIndex + 1)]
  }
}

export default function AppReducer(state: AppState = initialState, action: ActionType): AppState {
  switch (action.type) {
    case 'APP_ADD_PANE':
      return addPane(state)

    case 'APP_OPEN':
      return open(state, action.payload.paneIndex, action.payload.mode, action.payload.uuid)

    default:
      return state
  }
}
