// @flow
import React from 'react'

import Nav from '../components/nav'
import Page from '../components/Page'

export default function Home() {
  console.log(process.env.TEST_VAR)
  return (
    <Page>
      <Nav />
      <h2 className="">Hello World</h2>
    </Page>
  );
}
