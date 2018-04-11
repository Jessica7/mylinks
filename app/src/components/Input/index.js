import React from 'react';
import Label from 'app/components/Label';

const Input = ({
  input, type, label, placeholder, className, name, meta: { error, touched }
}) => {
  return (
    <div className="wrapper-input">
      <input type={type} id={input.name}
             className={className}
             placeholder={placeholder}
             {...input} />
      <span className="error">{touched && error}</span>
    </div>
  )
};

export default Input;
