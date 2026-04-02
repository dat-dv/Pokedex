import type { Move } from "../models/move";
import type { MoveDTO } from "../graphql/types";

export function mapToMove(data: MoveDTO): Move {
  return {
    id: data.id,
    name: data.name,
    accuracy: data.accuracy,
    pp: data.pp,
    power: data.power,
    type: data.pokemon_v2_type.name,
    description:
      data.pokemon_v2_moveflavortexts[0]?.flavor_text?.replace(
        /[\n\f]/g,
        " ",
      ) || "No description available.",
  };
}
