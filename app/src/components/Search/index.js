import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from 'app/components/Input';

let Search = ({ handleSubmit, onChange }) => (
  <form className="search-form" onChange={handleSubmit(onChange)}>
    <div className="wrapper-search">
      <Field
        type="text"
        size="large"
        component={Input}
        className="input-form"
        placeholder="search" />
    </div>
  </form>
);

Search = reduxForm({
  form: 'search-form'
})(Search);

Search = connect(
  state => ({ search: '' })
)(Search);

export default Search;
