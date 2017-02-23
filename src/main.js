/* eslint "flowtype/require-valid-file-annotation": 0 */
import 'babel-polyfill'
import './styles/init.css'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'

const root = document.querySelector('.main')

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<Root/>, root)
} else {
  const render = async () => {
    const { default: Root } = (await import('./containers/Root'))
    ReactDOM.render(
      <AppContainer><Root/></AppContainer>,
      root
    )
  }
  render()
  if (module.hot) module.hot.accept('./containers/Root', render)
}
