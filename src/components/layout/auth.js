import cls from 'classnames';
import PropTypes from 'prop-types';

import Illustration from '@/components/auth/illustration';
import Header from '@/components/auth-header';

const propTypes = {
  children: PropTypes.node,
  hasIllustration: PropTypes.bool,
};

const defaultProps = {
  hasIllustration: false,
};

function AuthLayout({ children, hasIllustration }) {
  return (
    <>
      <Header />

      <div className="container mx-auto mt-25">
        <div className="flex px-row">
          {hasIllustration && (
            <div className="w-5/12 mr-auto px-col">
              <Illustration />
            </div>
          )}
          <div
            className={cls('px-col', {
              'w-5/12': hasIllustration,
              'w-full md:w-9/12 mx-auto': !hasIllustration,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

AuthLayout.propTypes = propTypes;
AuthLayout.defaultProps = defaultProps;

export default AuthLayout;
