import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Validate from 'app/helpers/validate';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

const tags = [
  { value: 'ux', label: 'ux' },
  { value: 'ruby', label: 'ruby' },
  { value: 'devops', label: 'devops' },
  { value: 'js', label: 'js' }
];

let LinkForm = ({ options, handleSubmit, onSubmit, btnDescription }) => (
  <form className="form-link" onSubmit={handleSubmit(onSubmit)}>
    <Field
      type="text"
      name="title"
      label="Title"
      component={Input}
      className="form-input"
      placeholder="title"
      data-required />
    <Field
      type="text"
      name="url"
      label="Url"
      component={Input}
      className="form-input"
      placeholder="url" />
    <Field
      type="select"
      name="tags"
      label={'Tags'}
      component={Select}
      options={options}
      multi={true}
      className="form-input"
      placeholder={'Select your tag(s)'} />
    <Button
      type={'submit'}
      size={'medium'}
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
