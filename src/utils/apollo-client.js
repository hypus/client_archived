import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

function createApolloClient(initialState, ctx) {
  const apollo = new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: process.env.GRAPHQL_DEV_URI,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache().restore(initialState),
  });

  return apollo;
}

export default createApolloClient;
