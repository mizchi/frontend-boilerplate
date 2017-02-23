/* @flow */
import { connect } from 'react-redux'
import React from 'react'
import type { Dispatcher, Connector } from '../../types'
import Home from './components/Home'
import type {Action, State} from './reducers'

function HomeContainer (
  props: State & Dispatcher<Action>
) {
  return (
    <Home {...props} dispatch={props.dispatch}/>
  )
}

const connector: Connector<{}, State, Action> = connect(({ home }) => home)

export default connector(HomeContainer)
