import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Button = ({ onClick, value, type, variant, loading = false }) => (
  <button
    onClick={onClick}
    className={cn(styles.button, styles[variant], loading && styles.loading)}
    type={type}
  >
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;