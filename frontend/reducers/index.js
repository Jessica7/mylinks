import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import link from './link';

const rootReducer = combineReducers({
  link,
  routing: routerReducer
});

export default rootReducer;
