// React
import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from  './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// Routes
import Routes from './routes';

// Style
import './styles/style.sass';

const history =  createBrowserHistory();

const store = configureStore();
window.store = store;

render(
  <Provider store={store}>
    <Routes history={history} store={store} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
