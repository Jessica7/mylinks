import React from 'react';

const Input = ({
  input, type, label, placeholder, className, name, meta: { error, touched }
}) => {
  console.log(label);
  return (
    <div>
      {label ? <label htmlFor={input.name}>{label}</label> : null}
      <input type={type} id={input.name}
             className={className}
             placeholder={placeholder}
             {...input} />
      {touched && error}
    </div>
  )
};

export default Input;
