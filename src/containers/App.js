/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import type { Dispatcher, Connector } from '../types'
import type { State, Action } from '../reducers/home-reducer.js'
import Layout from '../components/Layout'
import HomeContainer from './HomeContainer'

function App (
  _props: State & Dispatcher<Action>
) {
  return <Layout children={<HomeContainer/>}/>
}

const connector: Connector<{}, State, Action> = connect(({ app }) => app)

export default connector(App)
