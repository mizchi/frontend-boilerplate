/* @flow */

export type IncrementAction = { type: "INCREMENT"}
export type DecrementAction = { type: "DECREMENT"}

export type Action = IncrementAction | DecrementAction
