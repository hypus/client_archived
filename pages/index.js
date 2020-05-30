import React from 'react';
import { Helmet } from 'react-helmet';

import { Paragraph, Title } from '@/common';

import { AppLayout } from '@/layout';

function Home() {
  return (
    <AppLayout>
      <Helmet title="Home" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque eligendi uis consequuntur laboriosam eos
        quaerat in voluptas dolorem quos architecto, ducimus deleniti quod maiores eum pariatur sint vitae? Nobis?
      </Paragraph>
      <div className="hello">Hello React.js</div>
      <Title size="sm">HELLO WORLD</Title>
    </AppLayout>
  );
}

export default Home;
