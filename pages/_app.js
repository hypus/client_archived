// @flow
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/index.css';

type Props = {
  Component: any,
  pageProps: any,
};

function HypusApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

HypusApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default HypusApp;
