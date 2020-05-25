// @flow
import React from 'react';

import { Button } from '@/ui';

export default { title: 'Button' };

export const withText = () => (
  <Button variant="primary">Hello Button</Button>
);

export const withSomeEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
