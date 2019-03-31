import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { REFRESH_TIME_OPTIONS } from '../../constants';
import SectionHeader from 'components/SectionHeader';
import Row from 'components/Row';

import styles from './index.module.css';

const Settings = ({ onRefreshTimeChange, refreshTime, lastUpdateTime }) => (
  <section>
    <SectionHeader text="Settings" />
    <Row>
      <div className={styles.content}>
        <label htmlFor="refresh-time" className={styles.label}>
          Refresh time
      </label>
        <select
          value={refreshTime}
          id="refresh-time"
          onChange={e => onRefreshTimeChange(e.target.value)}
        >
          {REFRESH_TIME_OPTIONS.map(timeout => (
            <option key={timeout} value={timeout}>
              {timeout}
            </option>
          ))}
        </select>
        <span className={styles.updateTime}>
          Updated at: {lastUpdateTime || '...'} 
        </span>
      </div>
    </Row>
  </section>
);

const mapStateToProps = state => ({
  lastUpdateTime: state.rates.lastUpdateTime,
});

Settings.propTypes = {
  lastUpdateTime: PropTypes.string,
  refreshTime: PropTypes.number.isRequired,
  onRefreshTimeChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Settings);