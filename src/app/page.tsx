import { PokemonList } from "@/components/pokemon-list";
import { HomeBanner } from "@/components/banner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <PokemonList />
    </>
  );
}
