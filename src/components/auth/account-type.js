import PropTypes from 'prop-types';

import { Icon } from '@/common';

const propTypes = {
  extraClassName: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const defaultProps = {};

function AccountType({
  extraClassName, icon, name, description, ...props
}) {
  return (
    <div
      className="flex items-center justify-between p-8 border border-light-75 shadow-sm rounded-2 cursor-pointer hover:border-primary-200 group"
      {...props}
    >
      <div className="flex items-center">
        <div className="mr-5 text-dark group-hover:text-primary-200">
          <Icon name={icon} size={32} />
        </div>
        <div>
          <div className="text-dark group-hover:text-primary-200 text-base font-title">
            {name}
          </div>
          <div className="text-light-400 text-sm mt-2">{description}</div>
        </div>
      </div>
      <div className="text-primary-200 hidden group-hover:block">
        <Icon name="ChevronRight" size={32} />
      </div>
    </div>
  );
}

AccountType.propTypes = propTypes;
AccountType.defaultProps = defaultProps;

export default AccountType;
