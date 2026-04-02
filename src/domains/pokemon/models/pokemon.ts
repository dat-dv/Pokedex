export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  image: string;
  abilities: string[];
  stats?: Array<{
    name: string;
    value: number;
  }>;
  description?: string;
  moves?: Array<{
    id: number;
    name: string;
  }>;
}
