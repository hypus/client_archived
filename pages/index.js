import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Paragraph, Title } from '@/common';
import {
  Avatar, Textarea, Switcher, Select,
} from '@/ui';

import { AppLayout } from '@/layout';

import AccountType from '@/components/auth/account-type';

function Home() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <AppLayout>
      <Helmet title="Home" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque
        eligendi uis consequuntur laboriosam eos quaerat in voluptas dolorem
        quos architecto, ducimus deleniti quod maiores eum pariatur sint vitae?
        Nobis?
      </Paragraph>
      <div className="hello">Hello React.js</div>
      <Title size="sm">HELLO WORLD</Title>
      <div className="w-2/12">
        <Select
          placeholder="Choose One"
          options={[
            { id: 1, label: 'Option 1' },
            { id: 2, label: 'Option 2' },
            { id: 3, label: 'Option 3' },
            { id: 4, label: 'Option 4' },
          ]}
          onSelected={(item) => console.log(item)}
        />
      </div>
      <Textarea label="test" />
      {isChecked ? 'checked' : 'not checked'}
      <Switcher
        label="test et bakalım"
        isChecked={isChecked}
        onSelected={(checked) => setIsChecked(checked)}
      />
      <Avatar
        size="lg"
        source="https://cdn.zeplin.io/5ecc1c5ec6ae1047a3555c37/assets/e33552aa-cd31-4915-8e16-81eff68ad60d@3x.png"
        extraClassName="mb-12"
      />
      <AccountType
        icon="Codesandbox"
        name="Entrepreneur"
        description="for Founders and Co-Founders"
        onClick={() => console.log('CLICKED!')}
      />
    </AppLayout>
  );
}

export default Home;
