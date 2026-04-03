import PokemonDetail from "@/components/pokemon-detail";
import { Suspense } from "react";

export default function PokemonPage() {
  return (
    <Suspense fallback={null}>
      <PokemonDetail />
    </Suspense>
  );
}
