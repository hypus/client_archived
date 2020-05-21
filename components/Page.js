// @flow
import React, { type Node } from 'react';
import Head from 'next/head';

type Props = {
  children: Node,
  title?: string,
};

function Page({ children, title = 'This is the default title' }: Props) {
  return (
    <section>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </section>
  );
}

export default Page;
