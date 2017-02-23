/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import AppContainer from './app/AppContainer'
import store from './store'

export default function Root () {
  return <Provider store={store}><AppContainer /></Provider>
}
