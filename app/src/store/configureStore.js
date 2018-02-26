import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'app/reducers/index';
import logger from 'redux-logger';

export function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk, logger)
  );
}
