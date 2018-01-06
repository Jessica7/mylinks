import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { applyFilters } from '../../selectors';
import * as linkActions from 'actions/link';
import * as authActions from 'actions/auth';
import List from '../../components/List';
import DefaultView from '../../components/DefaultView';
import ReactPaginate from 'react-paginate';

const LIST_PERPAGE = 8;

class Home extends React.Component {
  constructor(props, context) {
    super(props);
    const [ intialItems ] = _.chunk(props.link.items, LIST_PERPAGE);
    this.state = {
      selected: 0,
      pageCount: this.calculatePageCount(props.link.items.length, LIST_PERPAGE),
      items: intialItems
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.loadData = this.loadData.bind(this);
    this.calculatePageCount = this.calculatePageCount.bind(this);
  }

  componentDidMount() {
    this.loadData({ selected: 0 });
  }
  
  loadData(data) {
    const limit = _.chunk(this.props.link.items, LIST_PERPAGE);
    this.setState({
      selected: data.selected,
      items: limit[data.selected]
    });
  }

  deleteItem(id) {
    this.props.linkAction.deleteLink(id);
  }

  calculatePageCount(items, listPerPage) {
    return Math.ceil(items / listPerPage)
  }

  render () {
    const items = this.props.link.items;
    const itemsOfChunks = _.chunk(items, LIST_PERPAGE);
    const pageCount = items.length < LIST_PERPAGE
      ? 1 : this.calculatePageCount(items.length, LIST_PERPAGE);
    return (
      <div className="container-list">
        <div className="content-list">
          {items.length > 0
            ? (
              <div>
                <List items={itemsOfChunks[this.state.selected]} onClick={this.deleteItem} />
                <div className="react-paginate">
                  <ReactPaginate
                      previousLabel={"previous"}
                      nextLabel={"next"}
                      breakLabel={<a href="">...</a>}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      onPageChange={this.loadData}
                      containerClassName={"pagination"}
                      previousClassName={'previous'}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active-paginate"} />
                </div>
              </div>
            ) : <div className="container-default-view">
                <DefaultView text="Not found :(" color="grey" size="medium" />
              </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    link: applyFilters(state),
    auth: state.auth
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
