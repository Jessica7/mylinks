import React from 'react';
import ReactSelect from 'react-select';

const Select = ({ input, onBlur, options, meta: { error, touched } }) => {
  return (
    <div>
      <ReactSelect
        multi={true}
        {...input}
        value={input.value || []}
        options={options}
        onBlur={() => input.onBlur([...input.value])}
      />
      {touched && error}
    </div>
  )
};

export default Select;
