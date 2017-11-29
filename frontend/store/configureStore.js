import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import reducers from '../reducers/index';

export function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
}
