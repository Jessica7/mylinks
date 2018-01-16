import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import FilterByTag from '../FilterByTag';
import Icon from '../Icon';

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

  render() {
    const visibleHeader = () => {
      return this.props.currentPathName == true ? 'hide-header' : '';
    }
    return (
      <header className={`ml-header ${visibleHeader()}`}>
        <div className="search">
          <Search onChange={_.debounce(this.props.searchItem, 1000)} />
        </div>
        <div className="filter">
          <FilterByTag selectTag={this.props.selectTag}
                       checkedTags={this.props.checkedTags} 
                       clearFilter={this.props.clearFilter}
                       clearFilterByOne={this.props.clearFilterByOne} />
        </div>
        <Link to="/cadastrar" className="circle-link">
          <span className="icon-plus">+</span>
        </Link>
        <div className="settings">
          <div className="content">
            <a href="#"><Icon type={'fa fa-cog'} size={'small'} color={'turquoise'} /></a>
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
