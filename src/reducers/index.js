/* @flow */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from './app-reducer'
import home from './home-reducer'

export default combineReducers({
  app, home, routing: routerReducer
})
