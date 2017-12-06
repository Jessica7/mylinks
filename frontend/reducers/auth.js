import * as ACTIONS from 'constants/auth';
import { createReducer } from 'reducers/createReducer';

const initialState = {
  token: null,
  error: null,
  isLogged: false,
  islogging: false
};

function authStart(state, action) {
  return {
    ...state,
    islogging: true
  };
}

function authSuccess(state, action) {
  return {
    ...state,
    name: action.auth.name,
    isLogged: true,
    token: action.auth.token
  };
}

function authError(state, action) {
  return {
    ...state,
    error: action.error
  };
}

function authLogout(state, action) {
  return {
    ...state,
    isLogged: false
  };
}

export default createReducer(initialState, {
  [ACTIONS.LOGIN_START]: authStart,
  [ACTIONS.LOGIN_SUCCESS]: authSuccess,
  [ACTIONS.LOGIN_ERROR]: authError,
  [ACTIONS.LOGOUT_USER]: authLogout,
});
