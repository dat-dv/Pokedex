"use client";

import { usePokemonList } from "@/hooks/use-pokemon-list";
import { PokemonCard } from "../pokemon-card";
import { Search } from "../search";
import { PokemonListEmpty } from "../empty-list";
import { VirtualGrid } from "../virtual-grid";
import { Pokemon } from "@/domains/pokemon/models/pokemon";
import PokemonListError from "./pokemon-list.error";
import PokemonListLoading from "./pokemon-list.loading";
import { PokeGridList } from "./poke-grid-list";
import { PokeGridItem } from "./poke-grid-item";

const gridComponents = {
  List: PokeGridList,
  Item: PokeGridItem,
};

const DEFAULT_LITMIT = 20;

export function PokemonList() {
  const {
    pokemons,
    loading,
    error,
    refetch,
    loadMore,
    isFetchingMore,
    search,
    setSearch,
  } = usePokemonList(DEFAULT_LITMIT);

  if (error) return <PokemonListError refetch={refetch} />;

  const firstLoading = loading && !pokemons.length;
  const isEmpty = !loading && !pokemons.length;

  return (
    <div className="w-full relative">
      <div className="sticky top-8 z-[100] pb-20 -mx-6 px-6">
        <div className="max-w-3xl mx-auto">
          <Search value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="w-full relative min-h-[600px]">
        {firstLoading && (
          <div className="absolute inset-0 z-10">
            <PokemonListLoading />
          </div>
        )}

        {isEmpty && !firstLoading && (
          <div className="pt-10">
            <PokemonListEmpty />
          </div>
        )}

        {!isEmpty && !firstLoading && (
          <div className="w-full transition-opacity duration-300">
            <VirtualGrid
              key="virtual-list"
              items={pokemons}
              loadingMore={isFetchingMore}
              onEndReached={loadMore}
              components={gridComponents}
              renderItem={(pokemon: Pokemon, index: number) => (
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                  priority={index <= 4}
                />
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}
