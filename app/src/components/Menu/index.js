import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'app/components/Icon';

const Menu = () => {
  return (
    <ul className="menu-sidebar">
      <li>
        <Link className="menu-link" to="/home">
          <Icon type={'fa fa-home'} size={'small'} color={'white'} />
          <span className="title">{'Home'}</span>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
