import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrencyPair from '../CurrencyPair';
import SectionHeader from 'components/SectionHeader';
import Button from 'components/Button';
import Row from 'components/Row';

import styles from './index.module.css';

class ExchangeRates extends Component {
  render() {
    return (
      <section>
        <SectionHeader text="Results" />
        {this.props.currencyPairs.map((pair, i) => (
          <Row key={i}>
            <div className={styles.content}>
              <CurrencyPair
                baseCurrency={pair[0]}
                targetCurrency={pair[1]}
              />
              <Button value="Remove" onClick={() => this.props.onExchangePairRemove(i)} />
            </div>
          </Row>
        ))}
      </section>
    );
  }
};

ExchangeRates.propTypes = {
  onExchangePairRemove: PropTypes.func.isRequired,
  currencyPairs: PropTypes.array.isRequired,
};

export default ExchangeRates;