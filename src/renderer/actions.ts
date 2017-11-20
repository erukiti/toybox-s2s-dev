// GENERATED!!
import { Dispatch as ReduxDispatch } from 'redux'

export type ActionType =
  { type: 'APP_ADD_COUNT', count: number } &
  { type: 'TOPIC_LIST_ADD', label: string, text: string } &
  { type: 'TOPIC_LIST_REMOVE', index: number }

export type Dispatch = ReduxDispatch<ActionType>
const actions = {
  APP_ADD_COUNT: 'APP_ADD_COUNT',
  TOPIC_LIST_ADD: 'TOPIC_LIST_ADD',
  TOPIC_LIST_REMOVE: 'TOPIC_LIST_REMOVE'
}
export default actions
