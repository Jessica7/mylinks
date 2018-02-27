import React from 'react';
import classNames from 'classnames';

const Image = ({ src, size, type, alt }) => {
  const imageClasses = classNames(`image -${type} -${size}`);
  return (
    <img src={src} className={imageClasses} alt={alt} />
  );
};

export default Image;
