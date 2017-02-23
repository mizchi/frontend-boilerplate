/* @flow */
// eslint-disable-next-line
import type { Connector as ReduxConnector } from 'react-redux'

export type Dispatcher<T> = {
  dispatch: (a: T | Promise<T>) => any
}

export type Connector<OP, P, A> = ReduxConnector<OP, P & Dispatcher<A>>
