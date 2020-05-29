// @flow
import cls from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as React from 'react';

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
  const buttonContainerClasses = cls(block ? 'block' : 'inline-block', {
    'cursor-no-drop select-none': disabled,
  });
  const buttonClasses = cls(
    'focus:outline-none font-paragraph items-center px-4 py-3 rounded-2 text-sm cursor-pointer',
    {
      'text-white bg-primary-200 hover:bg-primary-100 focus:bg-primary-300 focus:shadow-primary-outline':
        !outline && variant === 'primary',
      'border-primary-200 text-primary-200 hover:bg-primary-200 focus:bg-primary-300 focus:border-primary-300':
        outline && variant === 'primary',
      'bg-light-200 hover:bg-light-100 focus:bg-light-300 focus:shadow-light-outline text-dark':
        !outline && variant === 'light',
      'border-light-200 text-light-300 hover:bg-light-200 focus:bg-light-300': outline && variant === 'light',
      'focus:border-light-300 focus:text-dark hover:text-dark': outline && variant === 'light',
      'opacity-25 pointer-events-none': disabled,
      'bg-transparent border': outline,
      'flex justify-center w-full': block,
      'inline-flex': !block,
      'flex-row-reverse': (!loading && icon && icon.position) === 'right',
    },
    extraClassName, // 0
  );
  const iconClasses = cls({
    'ml-2': icon && icon.position === 'right',
    'mr-2': icon && icon.position === 'left',
  });

  if (to) {
    return (
      <div className={buttonContainerClasses}>
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
      </div>
    );
  }

  return (
    <div className={buttonContainerClasses}>
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
