import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from 'components/Form';
import FormField from 'components/FormField';
import Button from 'components/Button'

import { getFormValidator } from 'utils';
import { SIGN_UP_FORM } from '../../../../constants';

import styles from './index.module.scss';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    error: {},
    isSubmitting: false,
  };

  validateForm = getFormValidator(SIGN_UP_FORM);

  handleFieldChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.isSubmitting) return;
    const error = this.validateForm(this.state);
    if (!error) {
      this.setState({
          error: {},
          isSubmitting: true,
      }, () => {
        this.props.onSubmit(this.state, (err) => {
          this.setState({
            isSubmitting: false,
          });
          if (err) {
            alert(err.message);
          }
        });
      });
    } else {
      this.setState({
        error: {
          [error.field]: error.msg,
        },
        isSubmitting: false,
      });
    }
  }

  render() {
    const { error, isSubmitting } = this.state;

    return (
      <div className={styles.wrapper}>
        <Form onSubmit={this.handleFormSubmit}>
          <FormField
            error={error['email']}
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleFieldChange}
            required
          />
          <FormField
            error={error['password']}
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleFieldChange}
            required
          />
          <Button
            type="submit"
            value="Sign Up"
            variant="submit"
            loading={isSubmitting}
          />
        </Form>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;