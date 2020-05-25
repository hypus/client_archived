// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import { Badge, Button } from '@/ui';
import { AppLayout } from '@/layout';

function Home() {
  return (
    <AppLayout>
      <Helmet title="Home" />
      <Badge type="worker">FOUNDER</Badge>
      <Button variant="light">HELLO</Button>
    </AppLayout>
  );
}

export default Home;
