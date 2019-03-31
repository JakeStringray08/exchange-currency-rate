import { REQUIRED_PASSWORD_LEN, SIGN_IN_FORM, SIGN_UP_FORM } from './constants';

export const onlyUnique = (value, index, self) => { 
  return self.indexOf(value) === index;
}

const validateSignInForm = (values) => {
  if (!values.email) {
    return { msg: 'Email is required', field: 'email' };
  } else if (!values.password) {
    return { msg: 'Password is required', field: 'password' };
  } else {
    return null;
  }
};

export const validateSignUpForm = (values) => {
  if (!values.email) {
    return { msg: 'Email is required', field: 'email' };
  } else if (!/@/.test(values.email)) {
    return { msg: 'Email must be valid', field: 'email' };
  } else if (!values.password) {
    return { msg: 'Password is required', field: 'password' };
  } else if (values.password.length < REQUIRED_PASSWORD_LEN) {
    return { msg: 'Password must be 8 characters long at least', field: 'password' }
  } else {
    return null;
  }
}

export const getFormValidator = formName => {
  if (formName === SIGN_IN_FORM) {
    return validateSignInForm;
  } else if (formName === SIGN_UP_FORM) {
    return validateSignUpForm;
  } else {
    return () => null;
  }
}