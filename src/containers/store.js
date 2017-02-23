/* @flow */
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import reducer from './rootReducer'

const store: Store = createStore(reducer, applyMiddleware(promiseMiddleware, createLogger()))

export default store
