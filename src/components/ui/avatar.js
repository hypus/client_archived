import PropTypes from 'prop-types';
import cls from 'classnames';

const propTypes = {
  extraClassName: PropTypes.string,
  size: PropTypes.string,
  source: PropTypes.string,
};

const defaultProps = {
  size: 'md',
};

function Avatar({ extraClassName, size, source }) {
  return (
    <div
      className={cls(
        'rounded-full',
        {
          'w-12 h-12': size === 'lg',
          'w-10 h-10': size === 'md',
          'w-8 h-8': size === 'sm',
        },
        extraClassName,
      )}
    >
      <img className="rounded-full" src={source} alt="" />
    </div>
  );
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
