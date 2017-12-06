import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as linkActions from 'actions/link';
import * as authActions from 'actions/auth';
import List from '../../components/List';
import DefaultView from '../../components/DefaultView';

class Home extends React.Component {
  constructor(props, context) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
    this.logout = this.logout.bind(this);
  }

  deleteItem(id) {
    this.props.linkAction.deleteLink(id);
  }

  logout() {
    localStorage.removeItem('mylinks');
    this.props.authAction.logoutUser();
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <div className="content-list">
          <Link to="" onClick={this.logout}>Logout</Link>
          {this.props.link.items.length > 0
            ? <List items={this.props.link.items} onClick={this.deleteItem} />
            : <div className="container-defaultView">
                <DefaultView text="Not found" color="grey" size="small" />
              </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ link, auth }) => {
  return {
    link,
    auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    linkAction: bindActionCreators(linkActions, dispatch),
    authAction: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
