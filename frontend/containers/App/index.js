import React from 'react';
import { Switch, Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as linkActions from 'actions/link';
import Home from '../Home';
import Form from '../Form';
import Sidebar from '../../components/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="app">
        <Sidebar />
        <main className="wrapper">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cadastrar' component={Form} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    linkAction: bindActionCreators(linkActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
