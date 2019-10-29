import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from'react-router-dom';
import { bindActionCreators } from 'redux';
import * as linkActions from 'app/actions/link';
import Sidebar from 'app/components/Sidebar';
import Header from 'app/components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.selectTag = this.selectTag.bind(this);
    this.clearFilteringAllTags = this.clearFilteringAllTags.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.changeProfileImage = this.changeProfileImage.bind(this);
  }

  selectTag(tag) {
    const { linkAction } = this.props
    linkAction.concatFilter("byTags");
    linkAction.filteringByTag(tag);
  }

  clearFilteringAllTags() {
    this.props.linkAction.clearFilterAllTags("byTags");
  }

  searchItem(term) {
    const { linkAction} = this.props
    if(Object.keys(term).length === 0) {
      linkAction.clearSearchTerm();
    } else {
      linkAction.concatFilter("byTerm");
      linkAction.filteringBySearch(term);
    }
  }

  changeProfileImage(url) {
    this.props.linkAction.changeProfileImage(url);
  }

  getStatusHeader = () => {
    const pathname = this.props.location.pathname;
    const regExUrl = /^\/edit/i.test(pathname);
    const statusVisibledHeader = (!!regExUrl || pathname === '/cadastrar')
                                  ? true : false;
    return statusVisibledHeader;
  }

  render() {
    //TODO: improve this logic!
    
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
                      statusVisibledHeader={this.getStatusHeader()} /> : null}
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
