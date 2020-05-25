// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import { Badge } from '@/ui';
import { AppLayout } from '@/layout';

function Home() {
  return (
    <AppLayout>
      <Helmet title="Home" />
      <Badge type="worker">FOUNDER</Badge>
    </AppLayout>
  );
}

export default Home;
