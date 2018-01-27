import React from 'react'
import ReactDOM from 'react-dom'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reducers from './redux/rootReducer'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(
  reducers,
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
