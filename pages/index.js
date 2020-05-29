// @flow
// import React, { useState } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Paragraph, ProjectCard } from '@/common';

import { AppLayout } from '@/layout';

function Home() {
  return (
    <AppLayout>
      <Helmet title="Home" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque eligendi uis consequuntur laboriosam eos
        quaerat in voluptas dolorem quos architecto, ducimus deleniti quod maiores eum pariatur sint vitae? Nobis?
      </Paragraph>
      <div className="flex mx-row flex-wrap">
        {[0, 0, 0].map(() => (
          <div className="lg:w-4/12 md:w-6/12 w-full px-col mb-5 lg:mb-0">
            <ProjectCard
              avatar="https://via.placeholder.com/120"
              name="ZERO STUDIO"
              description="This is just lorem..."
              user={{
                fullname: 'Emirhan Engin',
                uuid: 'a68eed78-2996-4906-b9ff-ec3f748415e4',
              }}
              uuid="bfa737b3-807a-40a9-b980-9a278dd22f14"
              members={{
                total: 789185,
                online: 795,
              }}
              isMember={false}
            />
          </div>
        ))}
      </div>
      {/* <Badge type="worker">FOUNDER</Badge>
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
      <Checkbox label="This is a checkbox" id="checkbox" /> */}
    </AppLayout>
  );
}

export default Home;
