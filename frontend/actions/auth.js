import * as actions from 'constants/auth';

export function doLogin(credentials) {
  return (dispatch, getState) => {
    dispatch(loginStart());
    return new Promise((resolve, reject) => {
      const { username, password } = credentials;
      setTimeout(() => {
        if (username !== 'keka' && password !== '123') {
          dispatch(loginError({ message : 'error password or email' }));
          reject({
            error: { message : 'error password or email' },
            status: 404
          });
        }
        dispatch(loginSuccess({ name: 'keka', token: "0odsiosdklsaohd0" }));
        resolve({
          status: 200,
          data: { name: 'keka', token: "0odsiosdklsaohd0" }
        });
      }, 1000);
    });
  }
}

export function loginStart() {
  return {
    type: actions.LOGIN_START,
  };
}

export function loginSuccess(auth) {
  return {
    type: actions.LOGIN_SUCCESS,
    auth
  };
}

export function loginError(error) {
  return {
    type: actions.LOGIN_ERROR,
    error
  };
}

export function logoutUser() {
  return {
    type: actions.LOGOUT_USER
  };
}
