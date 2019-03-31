import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_SYMBOLS, SUPPORTED_SYMBOLS_LIST } from '../../constants';
import { onlyUnique } from 'utils';
import styles from './index.module.css';

import Button from 'components/Button';
import Row from 'components/Row';
import SectionHeader from 'components/SectionHeader';

class Symbols extends Component {
  state = {
    base: 'EUR',
    currency: 'RUB',
  };

  handleValueChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value,
    });
  }

  handleAddClick = (base, currency) => {
    this.props.onExchangePairAdd([base, currency]);
  };

  render() {
    const baseSymbols = SUPPORTED_SYMBOLS_LIST.map(([base]) => base);
    const currencySymbols = SUPPORTED_SYMBOLS_LIST.map(([_, currency]) => currency);

    return (
      <section className={styles.wrapper}>
        <SectionHeader text="Symbols" />
        <div>
          <ul>
            {DEFAULT_SYMBOLS.map(([base, currency], i) => (
              <Row key={i}>
                <li className={styles.flexBetween}>
                  <span>{base} / {currency}</span>
                  <Button
                    value="Add"
                    type="button"
                    onClick={() => this.handleAddClick(base, currency)}
                  />
                </li>
              </Row>
            ))}
            <Row>
              <li key={'selector'} className={styles.flexBetween}>
                <div>
                  <select
                    className={styles.selector}
                    value={this.state.base}
                    name="base"
                    onChange={this.handleValueChange}
                  >
                    {baseSymbols
                      .filter(onlyUnique)
                      .map((base, i) => (
                        <option key={i} value={base}>{base}</option>
                      ))}
                  </select>
                  <select
                    value={this.state.currency}
                    name="currency"
                    onChange={this.handleValueChange}
                  >
                    {currencySymbols
                      .filter(onlyUnique)
                      .map((currency, i) => (
                        <option key={i} value={currency}>{currency}</option>
                      ))}
                  </select>
                </div>
                <Button
                  value="Add"
                  type="button"
                  onClick={() => this.handleAddClick(this.state.base, this.state.currency)}
                />
              </li>
            </Row>
          </ul>
        </div>
      </section>
    )
  }
}

Symbols.propTypes = {
  onExchangePairAdd: PropTypes.func.isRequired,
};

export default Symbols;