import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';
import Icon from '../Icon';

let Search = ({ handleSubmit, onChange }) => (
  <form className="search-form" onChange={handleSubmit(onChange)}>
    <div className="wrapper-search">
      <Field
        type="text"
        name="search"
        component={Input}
        className="input-search"
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