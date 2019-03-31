import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const SectionHeader = ({ text }) => (
  <header className={styles.wrapper}>
    <h3>{text}</h3>
  </header>
);

SectionHeader.propTypes = {
  text: PropTypes.string,
}

export default SectionHeader;