/* @flow */

export type Pages = 'index' | 'edit'
export type TransitionAction = { type: "TRANSITION", location: Pages}

export type PageAction = TransitionAction
export type Action = TransitionAction
