import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setUser } from 'redux/auth/actions';
import firebase from '../../firebase';

class Auth extends Component {
  componentDidMount() {
    this.unSubFromAuthSrv = firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  componentWillUnmount() {
    this.unSubFromAuthSrv && this.unSubFromAuthSrv();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setUser,
}, dispatch);

export default connect(null, mapDispatchToProps)(Auth);