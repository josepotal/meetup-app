import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';

const middlewares = [promiseMiddleware()];

// eslint-disable-next-line
if (__DEV__) {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  undefined,
  enhancers(applyMiddleware(...middlewares)),
);
