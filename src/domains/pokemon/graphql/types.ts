export interface GetPokemonData {
  pokemon_v2_pokemon: Array<PokemonDTO>;
}

export interface GetPokemonVariables {
  limit: number;
  offset?: number;
  where?: Record<string, unknown>;
}

export interface PokemonWhereInput {
  _or?: Array<{
    name?: {
      _ilike?: string;
    };
    pokemon_v2_pokemontypes?: {
      pokemon_v2_type?: {
        name?: {
          _ilike?: string;
        };
      };
    };
  }>;
}

export interface PokemonDTO {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: Array<{
    pokemon_v2_type: {
      name: string;
    };
  }>;
  pokemon_v2_pokemonsprites: Array<{
    sprites: unknown;
  }>;
  pokemon_v2_pokemonabilities: Array<{
    pokemon_v2_ability: {
      name: string;
    };
  }>;
  pokemon_v2_pokemonstats: Array<{
    base_stat: number;
    pokemon_v2_stat: {
      name: string;
    };
  }>;
  pokemon_v2_pokemonspecy?: {
    name: string;
    pokemon_v2_pokemonspeciesflavortexts: Array<{
      flavor_text: string;
    }>;
  };
  pokemon_v2_pokemonmoves: Array<{
    pokemon_v2_move: {
      id: number;
      name: string;
    };
  }>;
}

export interface GetPokemonDetailData {
  pokemon_v2_pokemon_by_pk: PokemonDTO;
}

export interface GetPokemonDetailVariables {
  id: number;
}
