/* @flow */
import type { PageState } from '../types'
import type { Action } from '../types/action'

const initialState: PageState = {
  location: 'index'
}

export default (state: PageState = initialState, action: Action): PageState => {
  switch (action.type) {
    case 'TRANSITION':
      return {...state, location: action.location}
    default:
      return state
  }
}
