import cls from 'classnames';
import PropTypes from 'prop-types';

import { Paragraph, Title } from '@/common';

import Illustration from '@/components/auth/illustration';
import Header from '@/components/auth-header';

const propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  hasIllustration: PropTypes.bool,
  title: PropTypes.string,
};

const defaultProps = {
  hasIllustration: false,
};

function AuthLayout({
  children, hasIllustration, title, description,
}) {
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
            {hasIllustration ? (
              <div className="border border-light-100 rounded-4 px-8 pt-6 pb-10">
                {title && (
                  <Title size="sm" extraClassName="mb-4">
                    {title}
                  </Title>
                )}
                {description && (
                  <Paragraph extraClassName="mb-8">{description}</Paragraph>
                )}

                {children}
              </div>
            ) : (
              { children }
            )}
          </div>
        </div>
      </div>
    </>
  );
}

AuthLayout.propTypes = propTypes;
AuthLayout.defaultProps = defaultProps;

export default AuthLayout;
