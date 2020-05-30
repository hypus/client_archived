import React from 'react';
import PropTypes from 'prop-types';

import '../styles/index.css';

function HypusApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

HypusApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default HypusApp;
