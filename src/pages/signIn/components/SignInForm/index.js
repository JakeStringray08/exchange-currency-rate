import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from 'components/Form';
import FormField from 'components/FormField';
import Button from 'components/Button'

import styles from './index.module.scss';
import { getFormValidator,  } from 'utils';
import { SIGN_IN_FORM } from '../../../../constants';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    error: {},
    isSubmitting: false,
  };

  handleFieldChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  validateForm = getFormValidator(SIGN_IN_FORM);

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
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleFieldChange}
            error={error['email']}
            required
          />
          <FormField
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleFieldChange}
            error={error['pasword']}
            required
          />
          <Button
            type="submit"
            value="Sign In"
            variant="submit"
            loading={isSubmitting}
          />
        </Form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;