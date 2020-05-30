/* eslint-disable */
import cls from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  extraClassName: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {};

function Textarea({ label, id, extraClassName, error, value, ...props }) {
  const TextareaClasses = cls(
    'outline-none border border-light-200 rounded-2 placeholder-light-300 placeholder-light-400 py-3 pl-5 w-full',
    {
      'border-danger-200 bg-danger-400 text-danger-200 hover:border-danger-300 focus:border-danger-300': error,
      'hover:border-light-400 focus:border-light-400': !error,
    }
  );

  return (
    <div className={extraClassName}>
      <label className={cls('inline-block mb-3 text-light-300', { 'text-danger-200': error })} htmlFor={id}>
        {label}
      </label>

      <div className="relative">
        <textarea className={TextareaClasses} id={id} {...props}>
          {value}
        </textarea>
      </div>
      {error && <div className="mt-3 text-danger-200">{error}</div>}
    </div>
  );
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
