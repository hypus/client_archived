// @flow
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import {
  Badge, Button, Input, Checkbox,
} from '@/ui';
import { AppLayout } from '@/layout';

function Home() {
  const [value, setValue] = useState('');

  return (
    <AppLayout>
      <Helmet title="Home" />
      <Badge type="worker">FOUNDER</Badge>
      <Button variant="light">HELLO</Button>

      <div className="p-10 m-10">
        <Input
          extraClassName="mt-4"
          id="password"
          label="PASSWORD"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Checkbox label="This is a checkbox" id="checkbox" />
    </AppLayout>
  );
}

export default Home;
