export interface GetMoveDetailData {
  pokemon_v2_move_by_pk: MoveDTO;
}

export interface GetMoveDetailVariables {
  id: number;
}

export interface MoveDTO {
  id: number;
  name: string;
  accuracy: number | null;
  pp: number | null;
  power: number | null;
  pokemon_v2_type: {
    name: string;
  };
  pokemon_v2_moveflavortexts: Array<{
    flavor_text: string;
  }>;
}
