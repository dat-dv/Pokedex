import { useState, useMemo } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_POKEMONS } from "./queries";
import { mapToPokemon } from "../../domains/pokemon/mapper/pokemonMapper";
import type { Pokemon } from "../../domains/pokemon/models/pokemon";
import type {
  GetPokemonData,
  GetPokemonVariables,
  PokemonDTO,
} from "../../domains/pokemon/graphql/types";

export function usePokemonList(limit: number = 20) {
  const [search, setSearch] = useState("");
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const where = useMemo(() => {
    if (!search.trim()) return undefined;
    const searchPattern = `%${search.toLowerCase()}%`;
    return {
      _or: [
        { name: { _ilike: searchPattern } },
        {
          pokemon_v2_pokemontypes: {
            pokemon_v2_type: { name: { _ilike: searchPattern } },
          },
        },
      ],
    };
  }, [search]);

  const { data, loading, error, refetch, fetchMore } = useQuery<
    GetPokemonData,
    GetPokemonVariables
  >(GET_POKEMONS, {
    variables: { limit, offset: 0, where },
    notifyOnNetworkStatusChange: true,
  });

  const pokemons: Pokemon[] = useMemo(
    () =>
      (data?.pokemon_v2_pokemon as unknown as PokemonDTO[])?.map(
        mapToPokemon,
      ) ?? [],
    [data],
  );

  const handleLoadMore = async () => {
    if (loading || isFetchingMore) return;

    setIsFetchingMore(true);
    try {
      await fetchMore({
        variables: {
          offset: pokemons.length,
          where,
        },
      });
    } catch (err) {
      console.error("Failed to fetch more pokemon:", err);
    } finally {
      setIsFetchingMore(false);
    }
  };

  return {
    pokemons,
    loading,
    error,
    refetch,
    loadMore: handleLoadMore,
    isFetchingMore,
    search,
    setSearch,
  };
}
