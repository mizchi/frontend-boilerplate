/* eslint "flowtype/require-valid-file-annotation": 0 */
import 'babel-polyfill'
import './styles/init.css'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import store from './store'

const root = document.querySelector('.main')

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<Provider><App /></Provider>, root)
} else {
  const render = async () => {
    const { default: App } = (await import('./containers/App'))
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      root
    )
  }
  render()
  if (module.hot) module.hot.accept('./containers/App', render)
}
