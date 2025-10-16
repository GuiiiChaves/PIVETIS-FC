export interface Player {
  id: number;
  name: string;
  position: string;
  overall: number;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface FeaturedPlayer {
  name: string;
  position: string;
  overall: number;
  number: number;
}
