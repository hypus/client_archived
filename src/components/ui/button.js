// @flow
import React from 'react';
import Link from 'next/link';
import cls from 'classnames';

import PropTypes from 'prop-types';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.string.isRequired,
  extraClassName: PropTypes.string,
  icon: PropTypes.string,
  outline: PropTypes.bool,
  to: PropTypes.string,
  variant: PropTypes.string,
};

const defaultProps = {
  variant: 'primary',
};

type Props = {
  active?: boolean,
  block?: boolean,
  children: any,
  extraClassName?: string,
  icon?: string,
  outline?: boolean,
  to?: string,
  variant?: string,
};

function Button({ active, block, children, extraClassName, icon, outline, to, variant, ...props }: Props) {
  const classes = {
    container: cls(
      variant && !outline && `bg-${variant} hover:bg-${variant}-hover text-white`,
      block ? 'flex' : 'inline-flex',
      outline &&
        variant &&
        `bg-transparent hover:bg-${variant} text-${variant} hover:text-white border border-${variant}`,
      'px-4 py-2 rounded',
      extraClassName
    ),
  };
  if (to) {
    return (
      <Link href={to} {...props}>
        <a className={classes.container}>{children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.container} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
