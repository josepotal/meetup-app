import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import { middleware as middlewareRedux } from '../routes/AppNavigator';

const middlewares = [promiseMiddleware(), thunk, middlewareRedux];

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// eslint-disable-next-line
if (__DEV__) {
  middlewares.push(createLogger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  undefined,
  enhancers(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);
