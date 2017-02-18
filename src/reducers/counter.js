/* @flow */
import match from '@mizchi/match'
import type { CounterState } from '../types'
import type { Action } from '../types/action'

const initialState: CounterState = {
  count: 0
}

const counter = (state: CounterState = initialState, action: Action): CounterState => {
  return match(action.type)
  .case('INCREMENT').then(() => ({ count: state.count + 1 }))
  .case('DECREMENT').then(() => ({ count: state.count - 1 }))
  .default(() => state)
}

export default counter
