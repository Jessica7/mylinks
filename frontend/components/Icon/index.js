import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Icon = ({ type, size, color }) => {
  const iconClasses = classNames(`icon ${type} -${size} -${color}`)
  return (
    <i className={iconClasses} aria-hidden="true" />
  )
};

export default Icon;
