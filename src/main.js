/* eslint "flowtype/require-valid-file-annotation": 0 */
import './styles/init.css'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import App from './components/App'

const root = document.querySelector('.main')

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<Provider store={store}><App/></Provider>, root)
} else {
  const render = async () => {
    const { default: App } = (await import('./components/App'))
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App/>
        </Provider>
      </AppContainer>,
      root
    )
  }
  render()
  if (module.hot) module.hot.accept('./components/App', render)
}
