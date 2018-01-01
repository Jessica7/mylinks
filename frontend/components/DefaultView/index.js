import React from 'react';
import Image from '../Image';
import classNames from 'classnames';

const DefaultView = ({ text, color, size }) => {
  const defaultViewClassNames = classNames(`message -${size} -${color}`);
  return (
    <div className="wrapper-default-view">
      <i className="fa fa-5x fa-folder-o icon" aria-hidden="true"></i>
      <span className={defaultViewClassNames}>{text}</span>
    </div>
  );
}

export default DefaultView;