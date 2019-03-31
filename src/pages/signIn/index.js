import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import { connect } from 'react-redux';
import { redirect } from 'redux-first-router';

import PageLayout from 'layouts/PageLayout';
import SectionHeader from 'components/SectionHeader';
import firebase from '../../firebase';
import { ROUTE_HOME } from 'modules/Router/routes';
import SignInForm from './components/SignInForm';

import styles from './index.module.css';

class SignIn extends Component {
  handleSignIn = (state, cb) => {
    firebase.auth().signInWithEmailAndPassword(state.email, state.password)
      .then((user) => {
        localStorage.setItem('user', user.uid);
        this.props.onSignInSuccess();
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
          <Link to="/sign-up">Don`t have an account yet? Sign up for free!</Link>
        </div>
        <section>
          <div className={styles.headerWrapper}>
            <SectionHeader text="Sign in" />
            <SignInForm onSubmit={this.handleSignIn} />
          </div>
        </section>
      </PageLayout>
    );
  }
}

SignIn.propTypes = {
  onSignInSuccess: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSignInSuccess: () => dispatch(redirect({ type: ROUTE_HOME.type })),
});

export default connect(null, mapDispatchToProps)(SignIn);