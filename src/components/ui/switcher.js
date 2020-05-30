import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const propTypes = {
  extraClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  onSelected: PropTypes.func.isRequired,
};

const defaultProps = {};

function Switcher({
  extraClassName, isChecked, label, onSelected,
}) {
  const [checked, setChecked] = useState(isChecked || false);
  const handleSwitch = (status) => {
    setChecked(status);
    onSelected(status);
  };
  return (
    <button
      onClick={() => handleSwitch(!checked)}
      className={cls('flex items-center cursor-pointer focus:outline-none', extraClassName)}
    >
      <div
        className={cls('rounded-3 w-10 h-6 relative', {
          'bg-light-200': !checked,
          'bg-primary-200': checked,
        })}
      >
        <div
          className={cls('w-5 h-5 rounded-full absolute top-1/2 transform translate-y-minus-1/2', {
            'bg-light-300 left-2': !checked,
            'bg-white left-auto right-2': checked,
          })}
        />
      </div>
      <span
        className={cls('text-base font-paragraph pl-4', {
          'text-light-300': !checked,
          'text-primary-200': checked,
        })}
      >
        {label}
      </span>
    </button>
  );
}

Switcher.propTypes = propTypes;
Switcher.defaultProps = defaultProps;

export default Switcher;
