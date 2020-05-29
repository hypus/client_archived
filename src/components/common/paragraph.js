// @flow
import cls from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { type ParagraphProps } from '@/types/paragraph.type';

function Paragraph({
  extraClassName, children, type, ...props
}: ParagraphProps) {
  const paragraphClasses = cls('font-paragraph text-light-300 text-base leading-normal', {
    'font-light': type === 'light',
    'font-medium': type === 'medium',
    'font-bold': type === 'bold',
  });

  return (
    <p className={paragraphClasses} {...props}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  extraClassName: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['light', 'medium', 'bold']),
};

export default Paragraph;
