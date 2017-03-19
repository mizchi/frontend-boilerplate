/* @flow */
import { connect } from 'react-redux'
import React from 'react'
import type { Dispatcher, Connector } from '../types'
import type {Action, State} from '../reducers/home-reducer'
import Home from '../components/Home'

function HomeContainer (
  props: State & Dispatcher<Action>
) {
  return (
    <Home {...props} />
  )
}

const connector: Connector<{}, State, Action> = connect(({ home }) => home)

export default connector(HomeContainer)
