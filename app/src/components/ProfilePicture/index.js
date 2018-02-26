import React from 'react';
import Image from 'app/components/Image';

const ProfilePicture = ({ image, name }) => {
  return (
    <div className="profile-picture">
      <Image src={image} type={'circle'} size={'large'} alt="profile picture" />
      <p className="name">{name}</p>
    </div>
  );
};

export default ProfilePicture;
