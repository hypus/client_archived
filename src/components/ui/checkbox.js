// @flow
import cls from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  extraClassName: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

const defaultProps = {};

type Props = {
  extraClassName: ?string,
  id: string,
  label: ?string,
};

function Checkbox({
  extraClassName, id, label, ...props
}: Props) {
  return (
    <div className={cls('inline-flex items-center', extraClassName)}>
      <input type="checkbox" id={id} className="mr-2" {...props} />
      <label htmlFor={id} className="text-light-300 text-xs font-paragraph">
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
