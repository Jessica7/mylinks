import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from'react-router-dom';
import { bindActionCreators } from 'redux';
import * as linkActions from 'actions/link';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.selectTag = this.selectTag.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  selectTag(tag) {
    this.props.linkAction.concatFilter("byTags");
    this.props.linkAction.filteringByTag(tag);
  }

  clearFilter() {
    this.props.linkAction.clearFilterTags("byTags");
  }

  searchItem(term) {
    if(term.length == 0) {
      this.props.linkAction.clearSearchFilter();
    } else {
      this.props.linkAction.concatFilter("byTerm");
      this.props.linkAction.filteringBySearch(term.search || "");
    }
  }

  render() {
    const isLogged = localStorage.getItem('mylinks');
    return (
      <div id="app">
        { isLogged ? <Sidebar /> : null }
        <div className="ml-container">
          { isLogged
            ? <Header selectTag={this.selectTag}
                      checkedTags={this.props.link.tags}
                      clearFilter={this.clearFilter}
                      clearFilterByOne={this.props.linkAction.clearFilterByOne}
                      searchItem={this.searchItem} /> : null }
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
    link: state.link
  };
};

const mapDispatchToProps = dispatch => {
  return {
    linkAction: bindActionCreators(linkActions, dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
