import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';

let Search = ({ handleSubmit, onChange }) => (
  <form onChange={handleSubmit(onChange)}>
    <Field
      type="text"
      name="search"
      label="Search"
      component={Input}
      placeholder="search" />
  </form>
);

Search = reduxForm({
  form: 'search-form'
})(Search);

Search = connect(
  state => ({ search: '' })
)(Search);

export default Search;
