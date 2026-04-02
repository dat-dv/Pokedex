import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
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
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        name
        pokemon_v2_pokemonspeciesflavortexts(
          limit: 1
          where: { language_id: { _eq: 9 } }
        ) {
          flavor_text
        }
      }
      pokemon_v2_pokemonmoves(limit: 20) {
        pokemon_v2_move {
          id
          name
        }
      }
    }
  }
`;
