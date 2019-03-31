import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import page from './pageReducer';
import auth from './auth/reducer';
import rates from './rates/reducer';
import routesMap from '../modules/Router/routesMap';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['page', 'location']
};

export default function configureStore(preloadedState) {
  const { reducer, middleware: routeMiddleware, enhancer } = connectRoutes(routesMap);
  const middleware = [routeMiddleware];

  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

  const rootReducer = combineReducers({ page, location: reducer, auth, rates });
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const middlewares = applyMiddleware(...middleware);
  const enhancers = compose(enhancer, middlewares, devtools);

  const store = createStore(persistedReducer, preloadedState, enhancers);
  const persistor = persistStore(store)

  return { store, persistor };
}