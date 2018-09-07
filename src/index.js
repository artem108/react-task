import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './css/index.css'
import configureStore from './config/configStore';
import Main from './app/containers/Main'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Main />
  </Provider>,
document.getElementById('root'))
