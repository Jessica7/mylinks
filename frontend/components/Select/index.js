import React from 'react';
import ReactSelect from 'react-select';

const Select = ({ multi, input, onBlur, options, meta: { error, touched } }) => {
  return (
    <div className="wrapper-select">
      <ReactSelect
        multi={multi}
        {...input}
        value={input.value || []}
        options={options}
        onBlur={() => input.onBlur([...input.value])} />
        <span className="error">{touched && error}</span>
    </div>
  )
};

export default Select;
