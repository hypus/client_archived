// @flow
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import {
  Badge, Button, Input, Checkbox, Alert,
} from '@/ui';
import { AppLayout } from '@/layout';

function Home() {
  const [value, setValue] = useState('');

  return (
    <AppLayout>
      <Helmet title="Home" />
      <Badge type="worker">FOUNDER</Badge>
      <Button variant="light">HELLO</Button>
      <Input
        extraClassName="mt-4"
        id="password"
        label="PASSWORD"
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Alert type="info" title="Title" description="Description" />
      <Checkbox label="This is a checkbox" id="checkbox" />
    </AppLayout>
  );
}

export default Home;
