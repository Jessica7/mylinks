import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import link from './link';
import auth from './auth';

const rootReducer = combineReducers({
  link,
  auth,
  routing: routerReducer,
  form: reduxFormReducer
});

export default rootReducer;
