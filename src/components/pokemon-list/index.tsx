"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePokemonList } from "@/hooks/use-pokemon-list";
import { PokemonCard } from "../pokemon-card";
import { Search } from "../search";
import { PokemonListEmpty } from "../empty-list";
import { VirtualGrid } from "../virtual-grid";
import { STAGGER_CONTAINER } from "@/constants/animations";
import { Pokemon } from "@/domains/pokemon/models/pokemon";
import PokemonListError from "./pokemon-list.error";
import PokemonListLoading from "./pokemon-list.loading";
import { PokeGridList } from "./poke-grid-list";
import { PokeGridItem } from "./poke-grid-item";

const gridComponents = {
  List: PokeGridList,
  Item: PokeGridItem,
};

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
  } = usePokemonList(20);

  if (error) return <PokemonListError refetch={refetch} />;
  const isEmpty = !loading && !pokemons.length;

  return (
    <div className="space-y-16">
      <div className="sticky top-4 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Search value={search} onChange={setSearch} />
        </div>
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        {loading ? (
          <PokemonListLoading />
        ) : isEmpty ? (
          <PokemonListEmpty />
        ) : (
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            animate="animate"
            className="w-full"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
