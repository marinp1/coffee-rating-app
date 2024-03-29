import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {StateProvider} from './Store';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Router basename="/coffee-rating-app">
        <Switch>
          <Route path="*" component={App} />
        </Switch>
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
