import { Helmet } from 'react-helmet';

import { Paragraph, Title } from '@/common';
import { Select } from '@/ui';
import { AppLayout } from '@/layout';

function Home() {
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
    </AppLayout>
  );
}

export default Home;
