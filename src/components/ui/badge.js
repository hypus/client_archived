// @flow
import cls from 'classnames';
import PropTypes from 'prop-types';
import React, { type Node } from 'react';

const propTypes = {
  children: PropTypes.node,
  extraClassName: PropTypes.string,
  type: PropTypes.oneOf(['founder', 'worker', 'member']),
};

const defaultProps = {
  type: 'member',
};

type Props = {
  children: Node,
  extraClassName: ?string,
  type: ?string,
};

function Badge({
  children, extraClassName, type, ...props
}: Props) {
  const badgeClasses = cls(
    'py-1 px-4 rounded-2 inline-block text-xs border',
    {
      'bg-primary text-white': type === 'founder',
      'bg-light-focus text-dark': type === 'member',
      'bg-success-bg text-success border-success': type === 'worker',
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
