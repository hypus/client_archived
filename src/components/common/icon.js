// @flow
import * as Icons from 'react-feather';
import PropTypes from 'prop-types';
import React from 'react';

type Props = {
  name: string,
};

function Icon({ name, ...props }: Props) {
  if (typeof Icons[name] !== 'object') {
    console.error(`Oh no! Looks like this icon does not exists. Please be sure that you use icons like:
1) Use PascalCase. eg: ChevronLeft
2) Use correct icons. For all icons list: https://feathericons.com/`);

    return <Icons.User {...props} />;
  }

  const IconComp = Icons[name];

  return <IconComp {...props} />;
}

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
