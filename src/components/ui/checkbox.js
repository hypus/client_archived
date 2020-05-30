import cls from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  extraClassName: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

const defaultProps = {};

function Checkbox({
  extraClassName, id, label, ...props
}) {
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
