import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import link from './link';

const rootReducer = combineReducers({
  link,
  routing: routerReducer,
  form: reduxFormReducer
});

export default rootReducer;
