import { useQuery } from "@apollo/client/react";
import { GET_POKEMON_DETAIL } from "./queries";
import { mapToPokemon } from "../../domains/pokemon/mapper/pokemonMapper";
import type { Pokemon } from "../../domains/pokemon/models/pokemon";
import type {
  GetPokemonDetailData,
  GetPokemonDetailVariables,
} from "../../domains/pokemon/graphql/types";

export function usePokemonDetail(id: number) {
  const { data, loading, error, refetch } = useQuery<
    GetPokemonDetailData,
    GetPokemonDetailVariables
  >(GET_POKEMON_DETAIL, {
    variables: { id },
    skip: !id,
    notifyOnNetworkStatusChange: true,
  });

  const pokemon: Pokemon | null = data?.pokemon_v2_pokemon_by_pk
    ? mapToPokemon(data.pokemon_v2_pokemon_by_pk)
    : null;

  return {
    pokemon,
    loading,
    error,
    refetch,
  };
}
