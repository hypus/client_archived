// @flow
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Helmet } from 'react-helmet';

import Nav from '@/Nav';
import Page from '@/Page';
import { withApollo } from '../src/utils/apollo';

const POSTS = gql`
  {
    allPosts(first: 10) {
      title
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(POSTS);

  if (loading) return <p>LOADING!!</p>;
  if (error) return <p style={{ color: 'red' }}>{error.message}</p>;

  return (
    <Page>
      <Helmet title="Welcome to Home" />
      <Nav />
      <div className='flex'>
        <ul>
          {data.allPosts.map((item, index) => (
            <li key={index.toString()} className='mb-25'>{item.title}</li>
          ))}
        </ul>
      </div>
    </Page>
  );
}

export default withApollo()(Home);
