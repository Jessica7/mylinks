import React from 'react';
import classNames from 'classnames';

const Input = ({
  input, type, size, label, placeholder, className, name, meta: { error, touched }
}) => {
  const inputClasses = classNames(`input-form -${size} -${type}`);
  return (
    <div className="wrapper-input">
      <input type={type} 
             id={input.name}
             className={inputClasses}
             placeholder={placeholder}
             {...input} />
      <span className="error">{touched && error}</span>
    </div>
  )
};

export default Input;
