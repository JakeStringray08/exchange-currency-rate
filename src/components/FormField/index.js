import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const FormField = ({ type, placeholder, name, onChange, error, required }) => (
  <div className={styles.wrapper}>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={styles.input}
      onChange={onChange}
      required={required}
    />
    {error && <div className={styles.error}>
       *{error}
    </div>}
  </div>
);

FormField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export default FormField;