import React from 'react';

import Row from 'components/Row';
import SectionHeader from 'components/SectionHeader';

import styles from './index.module.css';

const RatesHeader = () => (
  <div className={styles.wrapper}>
    <SectionHeader text="Rates" />
    <Row>
      <div className={styles.content}>
        <span>Pair</span>
        <span>Bid</span>
        <span>Ask</span>
      </div>
    </Row>
  </div>
);

export default RatesHeader;