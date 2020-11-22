export enum GroundType {
  'bean' = 'bean',
  'ground' = 'ground',
}

export interface Rating {
  manufacturer: string;
  coffeeName: string;
  groundType: typeof GroundType;
  roastLevel: number; // 1-7
  price: number; // cents per 100g
  rating: number; // 0-10
  notes: string;
  tastingNotes: string[];
}
