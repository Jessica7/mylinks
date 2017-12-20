import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Icon from '../Icon';

const ProfilePicture = ({ image, name }) => {
  return (
    <div className="profile-picture">
      <Image src={image} type={'circle'} size={'large'} />
      <p className="name">{name}</p>
    </div>
  );
};

export default ProfilePicture;
