import React from 'react';
import { Route, Router, Redirect } from 'react-router';

import Home from './containers/Home';
import Form from './containers/Form';
import App from './containers/App';
import UserLogin from './containers/UserLogin';
import Sidebar from './components/Sidebar';

const Routes = ({ history, store }) => {
  return (
    <Router history={history}>
      <App>
        <Route exact path='/' component={UserLogin} />
        <Route exact path='/login' component={UserLogin} />
        <PrivateRoute history={history} path='/home' store={store} component={Home} />
        <PrivateRoute history={history} path='/cadastrar' store={store} component={Form} />
      </App>
    </Router>
  );
};

function PrivateRoute({ component, history, store, ...rest }) {
  const isAuthenticated = store.getState().auth.token
                          && localStorage.getItem('mylinks');

  return (
    <Route {...rest} render={props => {
      if (!isAuthenticated) {
        return <Redirect to={{ pathname: '/', state: { from: props.location }}} />
      }
      return React.createElement(component, { ...props });
    }} />
  );
}

export default Routes;
