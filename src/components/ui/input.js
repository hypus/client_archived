// @flow
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  extraClassName: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
};

const defaultProps = {};

type Props = {
  label: ?string,
  id: ?string,
  extraClassName: ?string,
  error: ?string,
  success: ?string,
  disabled: ?string,
};

function Input({ label, id, extraClassName, error, success, disabled }: Props) {
  return <input />;
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
