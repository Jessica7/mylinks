import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as linkActions from 'actions/link';
import * as authActions from 'actions/auth';
import List from '../../components/List';
import DefaultView from '../../components/DefaultView';
import ReactPaginate from 'react-paginate';

const LIST_PERPAGE = 5;

class Home extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      itemsPerPage: [],
      pageCount: Math.ceil(props.link.items.length / LIST_PERPAGE)
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.logout = this.logout.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData({ selected: 0 });
  }

  loadData(data) {
    const limit = _.chunk(this.props.link.items, LIST_PERPAGE);
    this.setState({
      itemsPerPage: limit[data.selected || 0]
    });
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
    const listItems = () => {
      return 
    }
    return (
      <div className="container-list">
        <div className="content-list">
          <Link to="/" onClick={this.logout}>Logout</Link>
          {this.props.link.items.length > 0
            ? (
              <div>
                <List items={this.state.itemsPerPage} onClick={this.deleteItem} />
                <div className="react-paginate">
                  <ReactPaginate 
                      previousLabel={"previous"}
                      nextLabel={"next"}
                      breakLabel={<a href="">...</a>}
                      breakClassName={"break-me"}
                      pageCount={this.state.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      onPageChange={this.loadData}
                      containerClassName={"pagination"}
                      previousClassName={'previous'}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active-paginate"} />
                </div>
              </div>
            ) : <div className="container-defaultView">
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
