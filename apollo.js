// apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://darkcyan-caterpillar-298159.hostingersite.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
