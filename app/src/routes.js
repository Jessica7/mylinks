import React from 'react';
import { Route, Router, Redirect } from 'react-router';

import Home from './containers/Home';
import Form from './containers/Form';
import App from './containers/App';
import UserLogin from './containers/UserLogin';

export const Routes = ({ history, store }) => {
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={UserLogin} />
        <Route path='/login' component={UserLogin} />
        <App>
          <PrivateRoute history={history} path='/home' store={store} component={Home} />
          <PrivateRoute history={history} path='/cadastrar' store={store} component={Form} />
          <PrivateRoute history={history} path='/edit/:id' store={store} component={Form} />
        </App>
      </div>
    </Router>
  );
};

function PrivateRoute({ component, history, store, ...rest }) {
  const isAuthenticated = localStorage.getItem('mylinks');
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
