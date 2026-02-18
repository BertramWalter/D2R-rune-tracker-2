export type RuneName = 
  | 'El' | 'Eld' | 'Tir' | 'Nef' | 'Eth' | 'Ith' 
  | 'Tal' | 'Ral' | 'Ort' | 'Thul' | 'Amn' | 'Sol' 
  | 'Shael' | 'Dol' | 'Hel' | 'Io' | 'Lum' | 'Ko' 
  | 'Fal' | 'Lem' | 'Pul' | 'Um' | 'Mal' | 'Ist' 
  | 'Gul' | 'Vex' | 'Ohm' | 'Lo' | 'Sur' | 'Ber' 
  | 'Jah' | 'Cham' | 'Zod';

export interface Rune {
  name: RuneName;
  level: number;
}

export interface Runeword {
  name: string;
  runes: RuneName[];
  level: number;
  itemTypes: string[];
  properties: string[];
}

export type RuneInventory = Record<RuneName, number>;
