import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import { redirect } from 'redux-first-router';
import { connect } from 'react-redux';

import { ROUTE_HOME } from 'modules/Router/routes';
import PageLayout from 'layouts/PageLayout';
import SectionHeader from 'components/SectionHeader';
import SignUpForm from './components/SignUpForm';
import firebase from '../../firebase';

import styles from './index.module.css';

class SignUp extends Component {
  handleSignUp = (state, cb) => {
    firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
      .then((user) => {
        localStorage.setItem('user', user.uid);
        this.props.onSignUpSuccess();
      })
      .catch(err => {
        console.error(err);
        cb(err);
      });
  };

  render() {
    return (
      <PageLayout>
        <div className={styles.linkWrapper}>
          <Link to="/sign-in">Already have an account? Sign in!</Link>
        </div>
        <section>
          <div className={styles.headerWrapper}>
            <SectionHeader text="Sign up" />
            <SignUpForm onSubmit={this.handleSignUp} />
          </div>
        </section>
      </PageLayout>
    )
  }
}

SignUp.propTypes = {
  onSignUpSuccess: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSignUpSuccess: () => dispatch(redirect({ type: ROUTE_HOME.type })),
});

export default connect(null, mapDispatchToProps)(SignUp);