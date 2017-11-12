import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Icon from '../Icon';

const ProfilePicture = ({ image, name }) => {
  return (
    <div className="profile-picture">
      <Image src={image} size={'large'} />
      <p className="name">{name}</p>
      <Link to="/settings" className="settings">
        <Icon type={'fa fa-cog'} size={'medium'} color={'grey'} />
      </Link>
    </div>
  );
};

export default ProfilePicture;
