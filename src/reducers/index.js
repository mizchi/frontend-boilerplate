/* @flow */
import { combineReducers } from 'redux'
import app from './app-reducer'
import home from './home-reducer'

export default combineReducers({
  app, home
})
