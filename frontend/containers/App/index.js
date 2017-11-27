import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div id="app">
        <main className="wrapper">
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
