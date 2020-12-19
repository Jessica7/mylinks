import React from 'react';
import classNames from 'classnames';

const DefaultView = ({ icon, text, color, size }) => {
  const defaultViewClassNames = classNames(`message -${size} -${color}`);
  return (
    <div className="default-view">
      <i className={`${icon} icon`} aria-hidden="true"></i>
      <span className={defaultViewClassNames}>{text}</span>
    </div>
  );
}

export default DefaultView;
