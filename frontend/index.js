// Modules
import 'babel-polyfill';

// React
import React from 'react';
import { render } from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from  'store/configureStore';
import rootReducer from 'reducers';

// Routes
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

// Style
import 'styles/style.sass';

// Components
import App from 'containers/App';

const history =  createHistory();

// Store
const reactRdxRouterMiddware = routerMiddleware(history);
const store = configureStore(rootReducer, reactRdxRouterMiddware);
window.store = store;

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App}></Route>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
