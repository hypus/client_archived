// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import { AppLayout } from '@/layout';

function Home() {
  return (
    <AppLayout>
      <Helmet title="Home" />
      body
    </AppLayout>
  );
}

export default Home;
