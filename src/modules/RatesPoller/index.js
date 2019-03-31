import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ratesSrv from '../../services/RatesService';
import { setLastUpdateTime } from '../../redux/rates/actions';

class RatesPoller extends Component {
  pollId;

  componentDidMount() {
    this.fetchExchangeData();
    this.pollId = setInterval(this.fetchExchangeData, this.props.timeout);
  }

  componentWillUnmount() {
    clearInterval(this.pollId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.timeout !== prevProps.timeout) {
      clearInterval(this.pollId);
      this.fetchExchangeData();
      this.pollId = setInterval(this.fetchExchangeData, this.props.timeout);
    }
  }

  fetchExchangeData = () => {
    fetch('https://api.exchangeratesapi.io/latest')
    .then((response) => {
      return response.json();
    }).then((data) => {
      ratesSrv.publish(data);
      this.props.updateTime();
    })
    .catch(err => console.log(err));
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateTime: () => dispatch(setLastUpdateTime()),
});

RatesPoller.propTypes = {
  timeout: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(RatesPoller);