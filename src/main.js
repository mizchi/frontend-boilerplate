/* @flow */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'

ReactDOM.render(<Hello/>, document.querySelector('.main'))
