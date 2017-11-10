import React from 'react';
import classNames from 'classnames';

const Image = ({ src, size }) => {
  const imageClasses = classNames(`image -${size}`);
  return (
    <img src={src} className={imageClasses} />
  );
};

export default Image;
