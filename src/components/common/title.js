import cls from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  extraClassName: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  tag: PropTypes.string,
};

const defaultProps = {
  size: 'md',
  tag: 'h5',
};

const allowedTitleTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  div: 'div',
};
const sizes = {
  sm: 'font-medium text-4xl',
  md: 'font-medium text-6xl',
};

function Title({
  children, extraClassName, size, tag, ...props
}) {
  let TitleComp;

  if (typeof allowedTitleTags[tag] === 'undefined') {
    console.error("You're trying to use a tag that does not exist.");
    TitleComp = 'h5';
  } else {
    TitleComp = allowedTitleTags[tag];
  }

  return (
    <TitleComp
      className={cls(
        'font-title text-dark leading-normal tracking-wide',
        sizes[size],
      )}
      {...props}
    >
      {children}
    </TitleComp>
  );
}

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
