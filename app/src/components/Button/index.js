import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, type, size, color, children }) => {
  const buttonClasses = classNames(`button-general -${color} -${size}`);
  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}>
      <div className="text">{children}</div>
    </button>
  );
};

export default Button;
