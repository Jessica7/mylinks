import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';
import Icon from '../Icon';

let Search = ({ handleSubmit, onChange }) => (
  <form onChange={handleSubmit(onChange)}>
    <span className="icon-search">
      <Icon type={'fa fa-search'}
            size={'small'}
            color={'light-grey'} />
    </span>
    <Field
      type="text"
      name="search"
      component={Input}
      className="input-search"
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
