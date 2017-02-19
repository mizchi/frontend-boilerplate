/* @flow */
// eslint-disable-next-line
import type { Store as ReduxStore } from 'redux'
import type { Action } from './action'

export type PageState = {
  location: 'index' | 'edit'
}

export type State = {
  page: PageState
}

export type Store = ReduxStore<State, Action>;

// Support redux-promise
export type Dispatch = (action: Action | Promise<Action>) => Promise<Action>;
export type Dispatcher = {
  dispatch: Dispatch
}
