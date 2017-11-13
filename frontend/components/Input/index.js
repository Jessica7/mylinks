import React from 'react';

const Input = ({
  input, type, label, name, meta: { error, touched }
}) => (
  <div>
    {label ? <label htmlFor={input.name}>{label}</label> : null}
    <input type={type} id={input.name} placeholder={label} {...input} />
    {touched && error}
  </div>
);

export default Input;
