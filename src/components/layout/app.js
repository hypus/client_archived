// @flow
// import cls from 'classnames';
import PropTypes from 'prop-types';
import React, { type Node } from 'react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

type Props = {
  children: Node,
};

function AppLayout({ children }: Props) {
  // const classes = {
  //   sidebar: cls('w-25 h-full fixed top-0 left-0'),
  //   bodyContainer: cls('ml-25 h-full'),
  //   header: cls(),
  //   body: cls('border-l border-t border-grey-50 rounded-tl-9 w-full h-full p-20'),
  // };

  return (
    <div className="m-20">{children}</div>
    // <div className="h-full">
    //   <div className={classes.sidebar}>Left</div>
    //   <div className={classes.bodyContainer}>
    //     <div className={classes.header}>header</div>
    //     <div className="pl-25 pt-16 w-full absolute h-full left-0 top-0">
    //       <div className={classes.body}>{children}</div>
    //     </div>
    //   </div>
    // </div>
  );
}

AppLayout.propTypes = propTypes;
AppLayout.defaultProps = defaultProps;

export default AppLayout;
