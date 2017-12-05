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
  const panes = [..._state.panes]

  const tabIndex = _state.panes[paneIndex].tabs.findIndex(tab => tab.uuid === uuid)

  if (tabIndex >= 0) {
    panes[paneIndex].index = tabIndex
  } else {
    const tabs = [
      ..._state.panes[paneIndex].tabs,
      {
        mode,
        uuid
      }
    ]
    panes[paneIndex] = {
      tabs,
      index: tabs.length - 1
    }
  }

  return {
    ..._state,
    panes
  }
}

const selectTab = (_state: AppState, paneIndex: number, tabIndex: number): AppState => {
  const panes = [..._state.panes]
  panes[paneIndex].index = tabIndex
  return {
    ..._state,
    panes
  }
}

export default function AppReducer(state: AppState = initialState, action: ActionType): AppState {
  switch (action.type) {
    case 'APP_ADD_PANE':
      return addPane(state)

    case 'APP_OPEN':
      return open(state, action.payload.paneIndex, action.payload.mode, action.payload.uuid)

    case 'APP_SELECT_TAB':
      return selectTab(state, action.payload.paneIndex, action.payload.tabIndex)

    default:
      return state
  }
}
