import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { isLogged } = this.props.auth;
    return (
      <div id="app">
        { isLogged ? <Sidebar /> : null }
        <div className="ml-container">
          { isLogged ? <Header /> : null }
          <main>
            {this.props.children}
          </main>
        </div>
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
