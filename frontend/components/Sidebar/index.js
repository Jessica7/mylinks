import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import ProfilePicture from '../ProfilePicture';

const image = require('../../assets/images/profile-image.jpg');

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/home" className="logo">
        <h1>MyLinks</h1>
      </Link>
      <ProfilePicture image={image} name={'John'} />
      <Menu />
    </div>
  );
};

export default Sidebar;
