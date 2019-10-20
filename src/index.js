import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './App';

const app = document.getElementById('app');

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  app,
);
