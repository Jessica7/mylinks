import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Validate from 'app/helpers/validate';
import womanNotebook from '../../assets/images/woman-notebook1.png';
import logo from '../../assets/images/logo.png';
import Input from 'app/components/Input';
import Button from 'app/components/Button';

let Login = ({ handleSubmit, onSubmit }) => (

<div className="container" id="container">
  <div className="image-container">
    <div className="text-container">
     <span className="span-container">Save the link once <br></br> and acess it from anywhere.</span>
     <br></br>
     <span className="span2-container">Start saving your links!</span>
     <br></br><br></br>
     <Button
        type={'submit'}
        size={'medium'}
        color={'turquoise'}>
      {"IT'S FREE"}
      </Button>
    </div>
    <img className="img-background" src={womanNotebook} />
  </div>
  <div class="form-container">
    <img className="img-logo" src={logo} />
    <p className="welcome-text">Welcome!</p>
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
  </div>
</div>

);

const rules = {
  email: ['requiredEmail'],
  password: ['requiredPassword']
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
