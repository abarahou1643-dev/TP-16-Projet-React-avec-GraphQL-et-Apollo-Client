import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// (backend)
const httpLink = createHttpLink({
  uri: "/graphql", 
});


export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
