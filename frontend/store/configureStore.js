import { createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

export function configureStore(reducers) {
  return createStore(reducers);
}
