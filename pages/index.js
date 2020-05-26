// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Badge, Button, Input, Password, Search, Checkbox,
} from '@/ui';
import { AppLayout } from '@/layout';

function Home() {
  return (
    <AppLayout>
      <Helmet title="Home" />
      <Badge type="worker">FOUNDER</Badge>
      <Button variant="light">HELLO</Button>

      <div className="p-10 m-10">
        <Input extraClassName="mt-4" id="email" label="E-MAIL ADDRESS" />
        <Input
          extraClassName="mt-4"
          error="This e-mail already exists."
          value="test@test.com"
          id="email1"
          label="E-MAIL ADDRESS"
        />
        <Password extraClassName="mt-4" id="password" label="PASSWORD" placeholder="Enter your password" />
        <Search extraClassName="mt-4" id="password" label="SEARCH" placeholder="Search" />
      </div>
      <Checkbox label="This is a checkbox" id="checkbox" />
    </AppLayout>
  );
}

export default Home;
