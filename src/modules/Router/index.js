import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import * as components from './components';

const Router = ({ page }) => {
  const Component = components[page];
  return <Component />;
};

Router.propTypes = {
  page: PropTypes.string.isRequired,
};

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Router);