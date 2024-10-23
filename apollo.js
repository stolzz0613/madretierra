// apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://inmobiliariabackend.shop/graphql',
  cache: new InMemoryCache(),
});

export default client;
