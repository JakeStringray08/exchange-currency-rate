import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PageLayout = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <h1>Online Exchange Rate</h1>
    </header>
    <main>
      {children}
    </main>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;