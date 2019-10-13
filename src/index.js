import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './App';

const app = document.getElementById('app');
const { loggedIn } = store.getState().user;

render(
  <Provider store={store}>
    <Router>
      <App loggedIn={loggedIn} />
    </Router>
  </Provider>,
  app,
);
