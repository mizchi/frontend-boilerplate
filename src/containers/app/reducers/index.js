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

export type State = {
  location: 'home'
}

const initialState: State = {
  location: 'home'
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'RESET':
      return initialState
    default:
      return state
  }
}
