import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons(
    $limit: Int
    $offset: Int
    $where: pokemon_v2_pokemon_bool_exp
  ) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $where) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;
