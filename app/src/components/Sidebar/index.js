import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'app/components/Menu';
import ProfilePicture from 'app/components/ProfilePicture';
import FileUpload from 'app/components/FileUpload';

import imageDefault from '../../assets/images/image-profile-default.png';

const Sidebar = ({ receiveUrl, imageUrl }) => {
  return (
    <div className="sidebar">
      <Link to="/home" className="logo">
        <h1>MyLinks</h1>
      </Link>
      <div className="wrapper-fileupload">
        <FileUpload receiveUrl={receiveUrl} />
      </div>
      <ProfilePicture image={imageUrl || imageDefault} name={'John'} />
      <Menu />
    </div>
  );
};

export default Sidebar;
