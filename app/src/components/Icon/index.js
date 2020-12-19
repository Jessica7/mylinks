import React from 'react';
import classNames from 'classnames';

const Icon = ({ type, size, color }) => {
  const iconClasses = classNames(`icon-general ${type} -${size} -${color}`)
  return (
    <i className={iconClasses} aria-hidden="true" />
  )
};

export default Icon;
