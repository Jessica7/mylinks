import React from 'react';
import { Link } from 'react-router-dom';
import Search from 'app/components/Search';
import FilterByTag from 'app/components/FilterByTag';
import Icon from 'app/components/Icon';
import _ from 'lodash';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('mylinks');
    this.props.authAction.logoutUser();
    this.props.history.push('/');
  }
  
  visibleHeader = () => {
    return this.props.currentPathName === true ? 'hide-header' : '';
  }

  render() {
    return (
      <header className={`ml-header ${this.visibleHeader()}`}>
        <div className="search">
          <Search onChange={_.debounce(this.props.searchItem, 1000)} />
        </div>
        <div className="filter">
          <FilterByTag selectTag={this.props.selectTag}
                       checkedTags={this.props.checkedTags}
                       clearFilteringAllTags={this.props.clearFilteringAllTags}
                       clearFilterByOne={this.props.clearFilterByOne} />
        </div>
        <Link to="/cadastrar" className="circle-link">
          <span className="icon-plus">+</span>
        </Link>
        <div className="settings">
          <div className="content">
            <Icon type={'fa fa-cog'} size={'small'} color={'turquoise'} />
            <div className="wrapper-dropdown">
              <div className="wrapper-arrow-up">
                <div className="arrow-up"></div>
              </div>
              <ul className="list-dropdown">
                <li><Link to="#">Minha conta</Link></li>
                <li><Link to="/" onClick={this.logout}>Sair</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
