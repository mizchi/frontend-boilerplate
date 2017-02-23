/* @flow */
import { combineReducers } from 'redux'
import app from './app/reducers'
import home from './home/reducers'

export default combineReducers({
  app, home
})
