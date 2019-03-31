import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className={styles.form}>
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
}

export default Form;