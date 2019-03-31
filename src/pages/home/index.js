import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { redirect } from 'redux-first-router';

import Settings from './components/Settings';
import Symbols from './components/Symbols';
import RatesPoller from '../../modules/RatesPoller';
import ExchangeRates from './components/ExchangeRates';
import RatesHeader from './components/RatesHeader';
import PageLayout from '../../layouts/PageLayout';
import { ROUTE_SIGN_IN } from 'modules/Router/routes';
import { setRefreshTime, addSymbol, removeSymbol, resetAll } from '../../redux/rates/actions';
import firebase from '../../firebase';

import styles from './index.module.scss';

class Home extends Component {
  handleRefreshTimeChange = (newRefreshTime) => {
    this.props.setRefreshTime(newRefreshTime);
  };

  handleExchangePairAdd = (symbolPair) => {
    this.props.addSymbol(symbolPair);
  };

  handleExchangePairRemove = (symbolPairIdx) => {
    this.props.removeSymbol(symbolPairIdx);
  }

  handleLogout = () => {
    firebase.auth().signOut() 
      .then(this.props.onLogout);
  }

  render() {
    const { symbols, refreshTime } = this.props;

    return (
      <PageLayout>
        <div className="pull-right">
          <button className={styles.logOutBtn} onClick={this.handleLogout}>Log out</button>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <Settings
              refreshTime={refreshTime}
              onRefreshTimeChange={this.handleRefreshTimeChange}
            />
          </div>
          <div className={cn(styles.column, styles.ratesHeaderWrapperDesk)}>
            <RatesHeader />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <Symbols onExchangePairAdd={this.handleExchangePairAdd} />
          </div>
          <div className={cn(styles.column, styles.ratesHeaderWrapperMobile)}>
            <RatesHeader />
          </div>
          <div className={styles.column}>
            <ExchangeRates 
              currencyPairs={symbols}
              onExchangePairRemove={this.handleExchangePairRemove} 
            />
          </div>
        </div>
        <RatesPoller timeout={refreshTime * 1000} />
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  refreshTime: state.rates.refreshTime,
  symbols: state.rates.symbols,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    localStorage.removeItem('user');
    dispatch(resetAll());
    dispatch(redirect({ type: ROUTE_SIGN_IN.type }));
  },
  setRefreshTime: bindActionCreators(setRefreshTime, dispatch),
  addSymbol: bindActionCreators(addSymbol, dispatch),
  removeSymbol: bindActionCreators(removeSymbol, dispatch),
});

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
  setRefreshTime: PropTypes.func.isRequired,
  addSymbol: PropTypes.func.isRequired,
  removeSymbol: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);