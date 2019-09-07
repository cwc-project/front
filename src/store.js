import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { loadStateToStorage } from './middleware/localStorage';

import reducer from './reducers';

const middlewares = [promise, thunk, loadStateToStorage('user'), logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
