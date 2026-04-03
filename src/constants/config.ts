export const APP_CONFIG = {
  GRAPHQL_ENDPOINT:
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
    "https://beta.pokeapi.co/graphql/v1beta",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;
