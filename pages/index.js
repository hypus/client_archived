import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Paragraph, Title } from '@/common';
import { Textarea, Switcher } from '@/ui';

import { AppLayout } from '@/layout';

function Home() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <AppLayout>
      <Helmet title="Home" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque eligendi uis consequuntur laboriosam eos
        quaerat in voluptas dolorem quos architecto, ducimus deleniti quod maiores eum pariatur sint vitae? Nobis?
      </Paragraph>
      <div className="hello">Hello React.js</div>
      <Title size="sm">HELLO WORLD</Title>
      <Textarea label="test" />
      {isChecked ? 'checked' : 'not checked'}
      <Switcher label="test et bakalım" isChecked={isChecked} onSelected={(checked) => setIsChecked(checked)} />
    </AppLayout>
  );
}

export default Home;
