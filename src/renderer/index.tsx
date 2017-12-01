import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './app'
import reducers from './reducers'

export const store = createStore(reducers)

const style = { height: '100%' }

render(
  <Provider store={store}>
    <App style={style} />
  </Provider>,
  document.getElementById('root')
)
