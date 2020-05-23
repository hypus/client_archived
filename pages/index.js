// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import { Button } from '@/ui';

function Home() {
  return (
    <>
      <Helmet title="Welcome to Home" />
      <div className="m-8">
        <Button loading icon={{ position: 'right', name: 'Plus' }} block variant="primary" outline>
          PRIMARY BUTTON
        </Button>
      </div>
    </>
  );
}

export default Home;
