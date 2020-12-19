import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Validate from 'app/helpers/validate';
import Input from 'app/components/Input';
import Select from 'app/components/Select';
import Button from 'app/components/Button';
import { tags } from '../../data/data.js';

let LinkForm = ({ options, handleSubmit, onSubmit, btnDescription }) => (
  <form className="form-link" onSubmit={handleSubmit(onSubmit)}>
    <Field
      type="text"
      size="medium"
      name="title"
      label="Title"
      component={Input}
      className="input-form"
      placeholder="title"
      data-required />
    <Field
      type="text"
      size="medium"
      name="url"
      label="Url"
      component={Input}
      className="input-form"
      placeholder="url" />
    <Field
      type="select"
      size="medium"
      name="tags"
      label={'Tags'}
      component={Select}
      options={options}
      multi={true}
      className="input-form"
      placeholder={'Select your tag(s)'} />
    <Button
      type={'submit'}
      size={'small'}
      color={'turquoise'}>
      {btnDescription}
    </Button>
  </form>
);

const rules = {
  title: ['required'],
  url: ['required', 'isUrl'],
  tags: ['hasItems']
};

function initFormValues(state) {
  let values = { title: "", url: "", tags: [] };
  const item = state.link.item;
  if (!!item) {
    values.title = item.title;
    values.url = item.url;
    values.tags = item.tags;
    values.id = item.id;
  }
  return values;
}

LinkForm = reduxForm({
  form: 'form-link',
  validate: values => new Validate(values, rules).getErrors()
})(LinkForm);

LinkForm = connect(
  state => ({
    initialValues: initFormValues(state), options: tags
  })
)(LinkForm);

export default LinkForm;
