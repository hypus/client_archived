import { useState } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from '@/common';

const propTypes = {
  extraClassName: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
};

const defaultProps = {
  size: 'md',
};

function Alert({
  extraClassName, description, title, type, size,
}) {
  const [isClose, setIsClose] = useState(false);
  const handleOnClose = () => setIsClose(true);

  return (
    !isClose && (
      <div
        className={cls(
          'p-5 border rounded-2 flex justify-between',
          {
            'bg-danger-400 border-danger-200 text-danger-200': type === 'error',
            'bg-white border-info text-info': type === 'info',
            'bg-success-400 border-success-200 text-success-200':
              type === 'success',
            'bg-warning-400 border-warning-200 text-warning-200':
              type === 'warning',
          },
          extraClassName,
        )}
      >
        <div className="flex items-center">
          {type === 'error' && <Icon name="XCircle" className="mr-5" />}
          {type === 'info' && <Icon name="AlertCircle" className="mr-5" />}
          {type === 'success' && <Icon name="CheckCircle" className="mr-5" />}
          {type === 'warning' && <Icon name="AlertTriangle" className="mr-5" />}
          <div
            className={cls({
              'flex flex-col': size === 'lg',
            })}
          >
            <strong className="mr-5">{title}</strong>
            <span
              className={cls({
                'mt-3': size === 'lg',
              })}
            >
              {description}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="cursor-pointer focus:outline-none"
          onClick={() => handleOnClose()}
        >
          <Icon name="X" />
        </button>
      </div>
    )
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
