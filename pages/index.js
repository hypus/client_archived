// @flow
// import React, { useState } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';

// import {  } from '@/ui';
import { ProjectCard } from '@/common';
import { AppLayout } from '@/layout';

function Home() {
  return (
    <AppLayout>
      <Helmet title="Home" />
      <div className="hello">Hello React.js</div>
      <div className="flex mx-row flex-wrap">
        {[0, 1, 2].map((i) => (
          <div key={i} className="lg:w-4/12 md:w-6/12 w-full px-col mb-5 lg:mb-0">
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
