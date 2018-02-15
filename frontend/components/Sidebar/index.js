import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import ProfilePicture from '../ProfilePicture';
import FileUpload from '../FileUpload';
const image = require('../../assets/images/profile-image.jpg');

const Sidebar = ({ receiveUrl, imageUrl }) => {
  return (
    <div className="sidebar">
      <Link to="/home" className="logo">
        <h1>MyLinks</h1>
      </Link>
      <div className="wrapper-fileupload">
        <FileUpload receiveUrl={receiveUrl} />
      </div>
      <ProfilePicture image={imageUrl} name={'John'} />
      <Menu />
    </div>
  );
};

export default Sidebar;
