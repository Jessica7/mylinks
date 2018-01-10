import React from 'react';
import ReactSelect from 'react-select';

const Select = ({ multi, input, onBlur, options, placeholder, label, meta: { error, touched } }) => {
  return (
    <div className="wrapper-select">
      {label ? <label htmlFor={input.name}>{label}</label> : null}
      <ReactSelect
        multi={multi}
        {...input}
        value={input.value || []}
        options={options}
        placeholder={placeholder}
        onBlur={() => input.onBlur([...input.value])} />
        <span className="error">{touched && error}</span>
    </div>
  )
};

export default Select;