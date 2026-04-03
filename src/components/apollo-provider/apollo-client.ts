import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { APP_CONFIG } from "@/constants/config";

const client = new ApolloClient({
  link: new HttpLink({
    uri: APP_CONFIG.GRAPHQL_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemon: {
            keyArgs: ["where"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;
