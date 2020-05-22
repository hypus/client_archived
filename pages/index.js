// @flow
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Helmet } from 'react-helmet';

import { withApollo } from '@/utils/apollo';

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
    <>
      <Helmet title="Welcome to Home" />
      <div className="flex">
        <ul>
          {data.allPosts.map((item, index) => (
            <li key={index.toString()} className="mb-3 bg-primary-hover text-white p-2">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default withApollo()(Home);
