import React from 'react';
import classNames from 'classnames';

const Image = ({ src, size, type }) => {
  const imageClasses = classNames(`image -${type} -${size}`);
  return (
    <img src={src} className={imageClasses} alt="" />
  );
};

export default Image;
