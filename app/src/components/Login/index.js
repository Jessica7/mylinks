import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Validate from 'app/helpers/validate';
import Input from 'app/components/Input';
import Button from 'app/components/Button';

let Login = ({ handleSubmit, onSubmit }) => (
  <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
    <Field
      type="text"
      name="email"
      label="email"
      component={Input}
      className="form-input"
      placeholder="email"
      data-required />
    <Field
      type="password"
      name="password"
      label="password"
      component={Input}
      className="form-input"
      placeholder="password" />
    <Button
      type={'submit'}
      size={'medium'}
      color={'turquoise'}>
    {'Entrar'}
    </Button>
  </form>
);

const rules = {
  email: ['required'],
  password: ['required']
};

function initFormValues(state) {
  let values = { email: "", password: "" };
  return values;
}

Login = reduxForm({
  form: 'form-login',
  validate: values => new Validate(values, rules).getErrors()
})(Login);

Login = connect(
  state => ({
    initialValues: initFormValues(state)
  })
)(Login);

export default Login;
