export interface Move {
  id: number;
  name: string;
  accuracy: number | null;
  pp: number | null;
  power: number | null;
  type: string;
  description: string;
}
