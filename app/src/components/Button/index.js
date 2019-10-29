import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, type, size, color, children, disabled }) => {
  const buttonClasses = classNames(`button -${color} -${size}`);
  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled || false}
      onClick={onClick}>
      <div className="text">{children}</div>
    </button>
  );
};

export default Button;
