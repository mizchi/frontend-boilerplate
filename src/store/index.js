/* @flow */
import promiseMiddleware from 'redux-promise'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers'
import type { Store } from '../types'

const store: Store = createStore(reducer, applyMiddleware(promiseMiddleware))

export default store
