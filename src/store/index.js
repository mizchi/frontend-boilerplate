/* @flow */
import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import reducer from '../reducers'

const store: Store = createStore(reducer, applyMiddleware(promiseMiddleware, createLogger()))
// see https://github.com/reactjs/react-router-redux/issues/348#issuecomment-286657767
export const history = syncHistoryWithStore(createBrowserHistory(), store)

export default store
