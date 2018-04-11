import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'app/actions/auth';
import Login from 'app/components/Login';

class UserLogin extends React.Component {
  constructor(props, context) {
    super(props);

    this.makeLogin = this.makeLogin.bind(this);
  }

  // @TODO: It needs to improve this solution
  componentWillMount() {
    if (localStorage.getItem('mylinks')) {
      this.props.history.push('/home');
    }
  }

  makeLogin(value) {
    const { authAction } = this.props;
    const data = {
      email: value.email,
      password: value.password,
    };
    authAction.doLogin(data).then((response) => {
      const { token } = response.data;
      localStorage.setItem('mylinks', token);
      this.props.history.push('/home');
    }).catch((error) => {
      console.log(error);
    })
  }

  render () {
    return (
      <div className="login-wrapper">
        <Login onSubmit={this.makeLogin} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authAction: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
