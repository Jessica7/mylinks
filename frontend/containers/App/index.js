import React from 'react';
import { Switch, Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as linkActions from 'actions/link';
import Home from '../Home';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="app">
        <main className="wrapper">
          <Switch>
            <Route exact path='/' component={Home} />
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
