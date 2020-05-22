// @flow
import React, { type Node } from 'react';
import Head from 'next/head';

type Props = {
  children: Node,
};

function Page({ children }: Props) {
  return (
    <section>
      {children}
    </section>
  );
}

export default Page;
