import cls from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon } from '@/common';

const propTypes = {
  extraClassName: PropTypes.string,
  onSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ),
  placeholder: PropTypes.string,
};

const defaultProps = {};

function Select({
  extraClassName,
  onSelected,
  options,
  placeholder,
  ...props
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(null);
  const selectClasses = cls(
    'w-full flex items-center justify-between border bg-white py-3 px-5 rounded-2 cursor-pointer hover:border-light-300 focus:outline-none',
    {
      'border-light-300': showOptions,
      'border-light-200': !showOptions,
    },
  );
  const onSelectOption = (option) => {
    setSelected(option);
    setShowOptions(false);
    onSelected(option);
  };

  return (
    <div className={cls('relative min-w-200', extraClassName)}>
      <button
        type="button"
        className={selectClasses}
        onClick={() => setShowOptions(!showOptions)}
        {...props}
      >
        {/* TODO Think about how to make this condition better. */}
        <span className="text-light-300 font-paragraph text-base">
          {selected ? selected.label || placeholder : placeholder}
        </span>
        <div className="text-light-300">
          <Icon name="ChevronDown" />
        </div>
      </button>
      {showOptions && (
        <div className="bg-white z-10 py-3 border border-light-200 rounded-2 mt-1 absolute w-full">
          {options.map(({ id, label }) => (
            <button
              type="button"
              key={id}
              className={cls(
                'py-2 px-4 cursor-pointer focus:outline-none flex w-full mb-1 last:mb-0',
                {
                  'bg-white hover:bg-light-100 text-light-300':
                    !selected || selected.id !== id,
                  'bg-primary-200 hover:bg-primary-300 text-white':
                    selected && selected.id === id,
                },
              )}
              onClick={() => onSelectOption({ id, label })}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
