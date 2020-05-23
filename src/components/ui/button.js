// @flow
import cls from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from '@/common';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  extraClassName: PropTypes.string,
  icon: PropTypes.shape({
    position: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool,
  outline: PropTypes.bool,
  to: PropTypes.string,
  variant: PropTypes.string,
};

const defaultProps = {
  variant: 'primary',
};

type Props = {
  active: ?boolean,
  block: ?boolean,
  children: any,
  disabled: ?boolean,
  extraClassName: ?string,
  icon: ?{
    position: ?string,
    name: string,
  },
  loading: ?boolean,
  outline: ?boolean,
  to: ?string,
  variant: string,
};

function Button({
  active,
  block,
  children,
  disabled,
  extraClassName,
  icon,
  loading,
  outline,
  to,
  variant,
  ...props
}: Props) {
  /**
   * 0 - global
   * 1 - hover
   * 2 - focus
   * 3 - variant-based
   */
  const buttonClasses = cls(
    'focus:outline-none font-paragraph items-center px-4 py-2 rounded text-sm', // 0
    `hover:bg-${variant}-hover`, // 1
    `focus:bg-${variant}-focus focus:border-${variant}-focus`, // 2
    !outline && `bg-${variant}`, // 3
    outline && `text-${variant} border-${variant}`, // 3
    {
      'opacity-25 pointer-events-none': disabled, // 0
      'bg-transparent border': outline, // 0
      'text-white': !outline, // 0
      'flex justify-center w-full': block, // 0
      'inline-flex': !block, // 0
      'flex-row-reverse': (!loading && icon && icon.position) === 'right', // 0
      'hover:text-white focus:text-white': variant !== 'light', // 3
    },
    extraClassName // 0
  );
  const iconClasses = cls({
    'ml-2': icon && icon.position === 'right',
    'mr-2': icon && icon.position === 'left',
  });

  if (to) {
    return (
      <Link href={to} {...props}>
        <a className={buttonClasses}>
          {loading && (
            <div className="w-6 mr-2">
              <svg className="circular" viewBox="25 25 50 50" stroke="currentColor">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" />
              </svg>
            </div>
          )}

          {!loading && icon && <Icon className={iconClasses} name={icon.name} />}

          {children}
        </a>
      </Link>
    );
  }

  return (
    <div className={cls(disabled && 'cursor-no-drop inline-block')}>
      <button className={buttonClasses} {...props}>
        {loading && (
          <div className="w-6 mr-2">
            <svg className="circular" viewBox="25 25 50 50" stroke="currentColor">
              <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" />
            </svg>
          </div>
        )}

        {!loading && icon && <Icon className={iconClasses} name={icon.name} />}

        {children}
      </button>
    </div>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
