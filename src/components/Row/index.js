import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Row = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;