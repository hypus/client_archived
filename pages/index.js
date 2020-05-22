// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import { Button } from '@/ui';

function Home() {
  return (
    <>
      <Helmet title="Welcome to Home" />
      <div>
        <Button outline to="/submit">
          test
        </Button>
      </div>
    </>
  );
}

export default Home;
