import { ActionType } from '../actions'
export interface History {
  count: number;
  code: string;
  result: string;
  date: number;
}
export interface SandboxState {
  code: string;
  histories: History[];
}
const initialState: SandboxState = {
  code: '',
  histories: []
}

const editCode = (_state: SandboxState, code: string) => {
  return {
    ..._state,
    code
  }
}

const run = (_state: SandboxState, count: number, result: string, date: number) => {
  const history: History = {
    count,
    code: _state.code,
    result,
    date
  }
  const histories = [..._state.histories, history]
  return {
    ..._state,
    code: '',
    histories
  }
}

export default function SandboxReducer(state: SandboxState = initialState, action: ActionType): SandboxState {
  switch (action.type) {
    case 'SANDBOX_EDIT_CODE':
      return editCode(state, action.payload.code)

    case 'SANDBOX_RUN':
      return run(state, action.payload.count, action.payload.result, action.payload.date)

    default:
      return state
  }
}
