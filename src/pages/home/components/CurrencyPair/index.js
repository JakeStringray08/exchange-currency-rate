import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ratesSrv from '../../../../services/RatesService';

import styles from './index.module.css';

class CurrencyPair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: this.getRate(ratesSrv.getResults()),
    }
  }

  componentDidMount() {
    ratesSrv.on(this.onRatesReceived);
  }

  componentWillUnmount() {
    ratesSrv.off(this.onRatesReceived);
  }

  getRate = (data) => {
    const rate = data && data.rates[this.props.targetCurrency];
    return rate;
  }

  onRatesReceived = (newData) => {
    const rate = this.getRate(newData);
    if (this.state.rate !== rate) {
      this.setState({
        rate,
      });
    }
  };

  checkPropsChanged = (prevProps) => {
    return prevProps.baseCurrency !== this.props.baseCurrency
     || prevProps.targetCurrency !== this.props.targetCurrency;
  }

  componentDidUpdate(prevProps) {
    if (this.checkPropsChanged(prevProps)) {
      this.setState({
        rate: this.getRate(ratesSrv.getResults()),
      });
    }
  }

  render() {
    const { rate } = this.state;
    const { baseCurrency, targetCurrency } = this.props;

    return (
      <div className={styles.wrapper}>
        <span>
          {baseCurrency} / {targetCurrency}
        </span>
        <span>
          {rate || '...'}
        </span>
        <span>
          {rate || '...'}
        </span>
      </div>
    );
  }
}

CurrencyPair.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
};

export default CurrencyPair;
