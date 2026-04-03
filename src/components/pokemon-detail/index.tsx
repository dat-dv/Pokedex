"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { usePokemonDetail } from "@/hooks/use-pokemon-detail";
import { MoveDetailModal } from "@/components/move-detail-modal";
import { PokemonHero } from "@/components/poke-hero";
import { PokemonStats } from "@/components/poke-stats";
import { BackNavigation } from "@/components/back-button";
import Loading from "@/components/pokemon-detail/pokemon-detail.loading";
import { cn } from "@/utils/cn";
import { TYPE_COLORS } from "@/constants/theme";
import DetailError from "./pokemon-detail.error";
import PokeNotFound from "./pokemon-detail.not-found";

export default function PokemonDetail() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { pokemon, loading, error, refetch } = usePokemonDetail(id);
  const [selectedMoveId, setSelectedMoveId] = useState<number | null>(null);

  if (loading) return <Loading />;
  if (error) return <DetailError error={error} reset={refetch} />;
  if (!pokemon) return <PokeNotFound />;

  const primaryType = pokemon.types[0];
  const colorSet = TYPE_COLORS[primaryType] || TYPE_COLORS.normal;

  return (
    <div className="min-h-screen relative">
      <div
        className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-all duration-1000",
          colorSet.split(" ")[0],
        )}
      />
      <BackNavigation />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <PokemonHero
          pokemon={pokemon}
          typeColors={TYPE_COLORS}
          onMoveSelect={setSelectedMoveId}
        />
        <PokemonStats pokemon={pokemon} colorSet={colorSet} />
      </div>

      <MoveDetailModal
        moveId={selectedMoveId}
        onClose={() => setSelectedMoveId(null)}
      />
    </div>
  );
}
