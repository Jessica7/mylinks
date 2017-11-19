import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import FilterByTag from '../FilterByTag';
import Icon from '../Icon';

const Header = ({ onChange, selectTag, clearFilter }) => {
  return (
    <header className="header">
      <div className="content">
        <Search onChange={() => {}} />
        <Link to="/cadastrar" className="circle-link">{'+'}</Link>
      </div>
      <FilterByTag selectTag={selectTag}
                   clearFilter={clearFilter} />
    </header>
  );
};

export default Header;
