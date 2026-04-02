import type { Pokemon } from "../models/pokemon";
import type { PokemonDTO } from "../graphql/types";

interface SpriteData {
  other?: {
    "official-artwork"?: {
      front_default?: string;
    };
  };
  front_default?: string;
}

export function mapToPokemon(data: PokemonDTO): Pokemon {
  let spriteData: SpriteData;
  try {
    const sprites = data.pokemon_v2_pokemonsprites[0]?.sprites as unknown;
    spriteData = (
      typeof sprites === "string" ? JSON.parse(sprites) : sprites
    ) as SpriteData;
  } catch {
    spriteData = {};
  }

  // Official artwork is often preferred for high quality
  const imageUrl =
    spriteData.other?.["official-artwork"]?.front_default ||
    spriteData.front_default ||
    "";

  // Flavor text might contain special characters like \n or \f, clean them
  const description =
    data.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text?.replace(
      /[\n\f]/g,
      " ",
    ) || "";

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.pokemon_v2_pokemontypes.map((t) => t.pokemon_v2_type.name),
    abilities: data.pokemon_v2_pokemonabilities.map(
      (a) => a.pokemon_v2_ability.name,
    ),
    image: imageUrl,
    stats: data.pokemon_v2_pokemonstats?.map((s) => ({
      name: s.pokemon_v2_stat.name,
      value: s.base_stat,
    })),
    description,
    moves: data.pokemon_v2_pokemonmoves?.map((m) => ({
      id: m.pokemon_v2_move.id,
      name: m.pokemon_v2_move.name,
    })),
  };
}
