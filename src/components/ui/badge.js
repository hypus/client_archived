import cls from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  extraClassName: PropTypes.string,
  type: PropTypes.oneOf(['founder', 'worker', 'member']),
};

const defaultProps = {
  type: 'member',
};

function Badge({
  children, extraClassName, type, ...props
}) {
  const badgeClasses = cls(
    'py-1 px-4 rounded-2 inline-block text-xs border bg-white',
    {
      'bg-primary-200 text-white': type === 'founder',
      'bg-light-200-focus text-dark': type === 'member',
      'bg-success-200-bg text-success-200 border-success-200': type === 'worker',
    },
    extraClassName,
  );

  return (
    <div className={badgeClasses} {...props}>
      {children}
    </div>
  );
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
