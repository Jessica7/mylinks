import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from'react-router-dom';
import { bindActionCreators } from 'redux';
import * as linkActions from 'app/actions/link';
import Sidebar from 'app/components/Sidebar';
import Header from 'app/components/Header';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.selectTag = this.selectTag.bind(this);
    this.clearFilteringAllTags = this.clearFilteringAllTags.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.changeProfileImage = this.changeProfileImage.bind(this);
  }

  selectTag(tag) {
    this.props.linkAction.concatFilter("byTags");
    this.props.linkAction.filteringByTag(tag);
  }

  clearFilteringAllTags() {
    this.props.linkAction.clearFilterAllTags("byTags");
  }

  searchItem(term) {
    if(Object.keys(term).length === 0) {
      this.props.linkAction.clearSearchTerm();
    } else {
      this.props.linkAction.concatFilter("byTerm");
      this.props.linkAction.filteringBySearch(term);
    }
  }

  changeProfileImage(url) {
    this.props.linkAction.changeProfileImage(url);
  }

  render() {
    //TODO: improve this logic!
    const pathname = this.props.location.pathname;
    const regExUrl = /^\/edit/i.test(pathname);
    const statusVisibledHeader = (regExUrl === true || pathname === '/cadastrar')
                                  ? true : false
    const isLogged = localStorage.getItem('mylinks');

    return (
      <div id="app">
        {isLogged ? <Sidebar receiveUrl={this.changeProfileImage}
                    imageUrl={this.props.link.url} /> : null}
        <div className="ml-container">
          {isLogged
            ? <Header selectTag={this.selectTag}
                      checkedTags={this.props.link.tags}
                      clearFilteringAllTags={this.clearFilteringAllTags}
                      clearFilterByOne={this.props.linkAction.clearFilterByOne}
                      searchItem={this.searchItem}
                      statusVisibledHeader={statusVisibledHeader} /> : null}
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
