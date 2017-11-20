// GENERATED!!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
  { type: 'APP_ADD', count: number } |
  { type: 'APP_SUB', count: number } |
  { type: 'TOPIC_LIST_ADD', label: string, text: string } |
  { type: 'TOPIC_LIST_REMOVE', index: number }

export const dispatcher = dispatch => {
  return {
    app: {
      add: (count: number) => dispatch({type: 'APP_ADD', count}),
      sub: (count: number) => dispatch({type: 'APP_SUB', count})
    },
    topicList: {
      add: (label: string, text: string) => dispatch({type: 'TOPIC_LIST_ADD', label, text}),
      remove: (index: number) => dispatch({type: 'TOPIC_LIST_REMOVE', index})
    }
  }
}
