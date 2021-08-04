import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store/store'

import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import history from "./history";
import { Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <App />
    </Router>
  </React.StrictMode>,
=======

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> jwt
  document.getElementById('root')
);

