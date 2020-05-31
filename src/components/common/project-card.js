import cls from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Button } from '@/ui';
import { Icon } from '@/common';
import { formatDecimalNumbers } from '@/utils';

const propTypes = {
  avatar: PropTypes.string.isRequired,
  extraClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  uuid: PropTypes.string.isRequired,
  members: PropTypes.object.isRequired,
  isMember: PropTypes.bool,
};

const defaultProps = {};

function ProjectCard({
  avatar,
  extraClassName,
  name,
  description,
  user,
  uuid,
  members,
  isMember,
  ...props
}) {
  return (
    <div
      className={cls('p-7 border border-light-300 rounded-2', extraClassName)}
      {...props}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="mr-5">
          <img src={avatar} className="rounded-2 lg:w-full" alt="" />
        </div>
        <div>
          <h5 className="font-title text-dark text-2xl font-medium">{name}</h5>
          <p className="font-paragraph text-light-300 font-medium leading-normal mt-4">
            {description}
          </p>
        </div>
      </div>
      <div className="pt-8">
        <div className="mb-5">
          <Link href={`/member/${user.uuid}`}>
            <a className="inline-flex items-center text-light-300 hover:text-light-400">
              <Icon name="User" />
              <div className="ml-4">{user.fullname}</div>
            </a>
          </Link>
        </div>
        <div className="mb-5">
          <Link href={`/project/${uuid}/members`}>
            <a className="inline-flex items-center text-light-300 hover:text-light-400">
              <Icon name="Users" />
              <div className="ml-4">
                {formatDecimalNumbers(members.total)}
                {' '}
                members
              </div>
            </a>
          </Link>
        </div>
        <div>
          <Link href={`/project/${uuid}/members/online`}>
            <a className="inline-flex items-center text-light-300 hover:text-light-400">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-success-300 rounded-full" />
              </div>
              <div className="ml-4">
                {formatDecimalNumbers(members.online)}
                {' '}
                members online
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="pt-8">
        <Button block>VIEW PROJECT</Button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;

export default ProjectCard;
