import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {reducer} from './reducers/index'
import {
  BrowserRouter as Router
} from "react-router-dom";

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
