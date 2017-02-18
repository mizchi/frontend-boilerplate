/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import Counter from '../containers/Counter'
import store from '../store'
import Layout from './Layout'

export default function App () {
  return (
    <Provider store={store}>
      <Layout>
        <Counter />
      </Layout>
    </Provider>
  )
}
