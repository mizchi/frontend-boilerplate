/* @flow */
export type LocationType = 'home'

export type Action =
  {
    type: 'TRANSITION',
    location: LocationType
  } |
  {
    type: 'RESET'
  }

export type State = {}

const initialState: State = {}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}
