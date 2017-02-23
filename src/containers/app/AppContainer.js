/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import type { Dispatcher, Connector } from '../../types'
import HomeContainer from '../home/HomeContainer'
import type { State, Action } from './reducers'

function AppContainer (
  { location }: State & Dispatcher<Action>
) {
  switch (location) {
    case 'home':
      return <HomeContainer/>
    default:
      return <span>error</span>
  }
}

const connector: Connector<{}, State, Action> = connect(({ app }) => app)

export default connector(AppContainer)
