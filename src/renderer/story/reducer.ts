import { ActionType } from '../actions'
import { Story } from '../types'
export type StoryState = {
  uuid: string
}
const initialState: StoryState = {
  uuid: ''
}

const start = (_state: StoryState, uuid: string): StoryState => {
  return {
    uuid
  }
}

export default function StoryReducer(state: StoryState = initialState, action: ActionType): StoryState {
  switch (action.type) {
    case 'STORY_START':
      return start(state, action.payload.uuid)

    default:
      return state
  }
}
