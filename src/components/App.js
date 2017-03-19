/* @flow */
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { history } from '../store'
import HomeContainer from '../containers/HomeContainer'
import Layout from './Layout'
import About from './About'
import NotFound from './NotFound'

export default function App (
  _props: {}
) {
  return (
    <BrowserRouter history={history}>
      <Layout children={
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/404" exact component={NotFound}/>
          <Route path="/" exact component={HomeContainer}/>
          <Route path="*" component={() => <Redirect to="/404"/>}/>
        </Switch>
      }/>
    </BrowserRouter>
  )
}
