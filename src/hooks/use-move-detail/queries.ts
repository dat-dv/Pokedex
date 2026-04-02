import { gql } from "@apollo/client";

export const GET_MOVE_DETAIL = gql`
  query GetMoveDetail($id: Int!) {
    pokemon_v2_move_by_pk(id: $id) {
      id
      name
      accuracy
      pp
      power
      pokemon_v2_type {
        name
      }
      pokemon_v2_moveflavortexts(limit: 1, where: { language_id: { _eq: 9 } }) {
        flavor_text
      }
    }
  }
`;
