import { useQuery } from "@apollo/client/react";
import { mapToMove } from "../../domains/move/mapper/moveMapper";
import type { Move } from "../../domains/move/models/move";
import type {
  GetMoveDetailData,
  GetMoveDetailVariables,
} from "../../domains/move/graphql/types";
import { GET_MOVE_DETAIL } from "./queries";

export function useMoveDetail(id: number) {
  const { data, loading, error, refetch } = useQuery<
    GetMoveDetailData,
    GetMoveDetailVariables
  >(GET_MOVE_DETAIL, {
    variables: { id },
    skip: !id,
    notifyOnNetworkStatusChange: true,
  });

  const move: Move | null = data?.pokemon_v2_move_by_pk
    ? mapToMove(data.pokemon_v2_move_by_pk)
    : null;

  return {
    move,
    loading,
    error,
    refetch,
  };
}
