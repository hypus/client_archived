import PropTypes from 'prop-types';

import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
};

export default MyApp;
