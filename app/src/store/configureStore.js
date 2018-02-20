import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'app/reducers/index';

export function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
}
