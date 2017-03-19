/* @flow */
import React from 'react'
import { Router, Route } from 'react-router'
import { history } from '../store'
import HomeContainer from '../containers/HomeContainer'
import Layout from './Layout'

export default function App (
  _props: {}
) {
  return <Layout children={
    <Router history={history}>
      <Route path="/" component={HomeContainer}/>
    </Router>
  }/>
}
