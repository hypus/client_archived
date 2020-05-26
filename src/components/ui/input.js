// @flow
/* eslint-disable */
import cls from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@/common';

const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string,
  extraClassName: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {};

type Props = {
  label: ?string,
  icon: ?any,
  id: ?string,
  extraClassName: ?string,
  error: ?string,
};

export function Input({ label, icon, id, extraClassName, error, ...props }: Props) {
  return (
    <div className={extraClassName}>
      <label
        className={cls('block mb-3 text-light-300', {
          'text-danger-200': error,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={cls({
          relative: icon,
        })}
      >
        <input
          className={cls(
            'outline-none border border-light-200 focus:border-light-400 rounded-2 placeholder-light-300 placeholder-light-400 py-3 pl-5 w-full',
            {
              'border-danger-200 bg-danger-400 text-danger-200': error,
            }
          )}
          id={id}
          {...props}
        />
        {icon && <div className="absolute bottom-0 right-0 h-full flex items-center pr-5 text-light-300">{icon}</div>}
      </div>
      {error && <div className="mt-3 text-danger-200">{error}</div>}
    </div>
  );
}

export function Password({ ...props }: Props) {
  return <Input type="password" {...props} icon={<Icon name="Lock" />} />;
}

export function Search({ ...props }: Props) {
  return <Input type="text" {...props} icon={<Icon name="Search" />} />;
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
