import cls from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon } from '@/common';

const propTypes = {
  error: PropTypes.string,
  extraClassName: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  showForgetPasswordLabel: PropTypes.bool,
  type: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  showForgetPasswordLabel: false,
};

function Input({
  error,
  extraClassName,
  icon,
  id,
  label,
  showForgetPasswordLabel,
  type,
  ...props
}) {
  const inputClasses = cls(
    'outline-none border border-light-200 rounded-2 placeholder-light-300 py-3 pl-5 w-full',
    {
      'border-danger-200 bg-danger-400 text-danger-200 hover:border-danger-300 focus:border-danger-300': error,
      'hover:border-light-400 focus:border-light-400 placeholder-light-300 text-light-400': !error,
      'pr-16': icon || type === 'password',
      'pr-5': !icon && type !== 'password',
    },
  );
  const iconClasses = cls(
    'absolute bottom-0 right-0 h-full flex items-center px-5 focus:outline-none',
    {
      'text-light-300': !error,
      'text-danger-200': error,
      'cursor-pointer': type === 'password',
    },
  );
  const [inputType, setInputType] = useState(type);
  const controlInputType = (str1, str2) => (inputType === 'text' ? str1 : str2);
  const changeInputType = () => setInputType(controlInputType('password', 'text'));

  return (
    <div className={extraClassName}>
      <div className="flex justify-between mb-3">
        <label
          className={cls(
            'inline-block text-light-300 text-base hover:text-light-400',
            { 'text-danger-200': error },
          )}
          htmlFor={id}
        >
          {label}
        </label>

        {type === 'password' && showForgetPasswordLabel && (
          <Link href="/forgot-password">
            <a className="text-sm text-light-300 hover:text-light-400">
              Forgot password?
            </a>
          </Link>
        )}
      </div>

      <div className="relative">
        <input type={inputType} className={inputClasses} id={id} {...props} />

        {type !== 'password' && icon && (
          <div className={iconClasses}>
            <Icon name={icon} />
          </div>
        )}

        {type === 'password' && (
          <button className={iconClasses} onClick={() => changeInputType()}>
            <Icon name={controlInputType('Unlock', 'Lock')} />
          </button>
        )}
      </div>

      {error && <div className="mt-3 text-danger-200">{error}</div>}
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
