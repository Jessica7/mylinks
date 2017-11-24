import React from 'react';

const Input = ({
  input, type, label, placeholder, className, name, meta: { error, touched }
}) => {
  return (
    <div className="wrapper-input">
      {label ? <label htmlFor={input.name}>{label}</label> : null}
      <input type={type} id={input.name}
             className={className}
             placeholder={placeholder}
             {...input} />
      <span className="error">{touched && error}</span>
    </div>
  )
};

export default Input;
