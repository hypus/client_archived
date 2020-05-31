/* eslint-disable */
import cls from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon } from '@/common';

const propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  extraClassName: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {
  type: 'text',
};

function Input({ type, label, icon, id, extraClassName, error, ...props }) {
  const inputClasses = cls(
    'outline-none border border-light-200 rounded-2 placeholder-light-300 placeholder-light-400 py-3 pl-5 w-full',
    {
      'border-danger-200 bg-danger-400 text-danger-200 hover:border-danger-300 focus:border-danger-300': error,
      'hover:border-light-400 focus:border-light-400': !error,
      'pr-16': icon,
    }
  );
  const iconClasses = cls(
    'absolute bottom-0 right-0 h-full flex items-center px-5',
    {
      'text-light-300': !error,
      'text-danger-200': error,
      'cursor-pointer': type === 'password',
    }
  );
  const [inputType, setInputType] = useState(type);
  const controlInputType = (str1, str2) => (inputType === 'text' ? str1 : str2);
  const changeInputType = () =>
    setInputType(controlInputType('password', 'text'));

  return (
    <div className={extraClassName}>
      <label
        className={cls('inline-block mb-3 text-light-300', {
          'text-danger-200': error,
        })}
        htmlFor={id}
      >
        {label}
      </label>

      <div className="relative">
        <input type={inputType} className={inputClasses} id={id} {...props} />
        {type !== 'password' && icon && (
          <div className={iconClasses}>
            <Icon name={icon} />
          </div>
        )}
        {type === 'password' && (
          <div className={iconClasses} onClick={() => changeInputType()}>
            <Icon name={controlInputType('Unlock', 'Lock')} />
          </div>
        )}
      </div>
      {error && <div className="mt-3 text-danger-200">{error}</div>}
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
