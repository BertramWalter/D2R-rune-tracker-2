import { RuneInventory, Runeword, RuneName } from './types';
import { RUNES } from './data';

export function canCraftRuneword(runeword: Runeword, inventory: RuneInventory): boolean {
  const neededRunes: Record<string, number> = {};
  
  for (const rune of runeword.runes) {
    neededRunes[rune] = (neededRunes[rune] || 0) + 1;
  }
  
  for (const [rune, needed] of Object.entries(neededRunes)) {
    if ((inventory[rune as RuneName] || 0) < needed) {
      return false;
    }
  }
  
  return true;
}

export function getEmptyInventory(): RuneInventory {
  return {
    'El': 0, 'Eld': 0, 'Tir': 0, 'Nef': 0, 'Eth': 0, 'Ith': 0,
    'Tal': 0, 'Ral': 0, 'Ort': 0, 'Thul': 0, 'Amn': 0, 'Sol': 0,
    'Shael': 0, 'Dol': 0, 'Hel': 0, 'Io': 0, 'Lum': 0, 'Ko': 0,
    'Fal': 0, 'Lem': 0, 'Pul': 0, 'Um': 0, 'Mal': 0, 'Ist': 0,
    'Gul': 0, 'Vex': 0, 'Ohm': 0, 'Lo': 0, 'Sur': 0, 'Ber': 0,
    'Jah': 0, 'Cham': 0, 'Zod': 0
  };
}

export interface RuneUpgrade {
  from: RuneName;
  to: RuneName;
  gem: string;
  maxUpgrades: number;
}

const RUNE_UPGRADES: Record<string, { to: RuneName; gem: string }> = {
  'El': { to: 'Eld', gem: 'Chipped' },
  'Eld': { to: 'Tir', gem: 'Chipped' },
  'Tir': { to: 'Nef', gem: 'Chipped' },
  'Nef': { to: 'Eth', gem: 'Chipped' },
  'Eth': { to: 'Ith', gem: 'Chipped' },
  'Ith': { to: 'Tal', gem: 'Chipped' },
  'Tal': { to: 'Ral', gem: 'Chipped' },
  'Ral': { to: 'Ort', gem: 'Chipped' },
  'Ort': { to: 'Thul', gem: 'Chipped' },
  'Thul': { to: 'Amn', gem: 'Normal' },
  'Amn': { to: 'Sol', gem: 'Normal' },
  'Sol': { to: 'Shael', gem: 'Normal' },
  'Shael': { to: 'Dol', gem: 'Normal' },
  'Dol': { to: 'Hel', gem: 'Normal' },
  'Hel': { to: 'Io', gem: 'Normal' },
  'Io': { to: 'Lum', gem: 'Flawed' },
  'Lum': { to: 'Ko', gem: 'Flawed' },
  'Ko': { to: 'Fal', gem: 'Flawed' },
  'Fal': { to: 'Lem', gem: 'Flawed' },
  'Lem': { to: 'Pul', gem: 'Flawed' },
  'Pul': { to: 'Um', gem: 'Flawless' },
  'Um': { to: 'Mal', gem: 'Flawless' },
  'Mal': { to: 'Ist', gem: 'Flawless' },
  'Ist': { to: 'Gul', gem: 'Flawless' },
  'Gul': { to: 'Vex', gem: 'Flawless' },
  'Vex': { to: 'Ohm', gem: 'Perfect' },
  'Ohm': { to: 'Lo', gem: 'Perfect' },
  'Lo': { to: 'Sur', gem: 'Perfect' },
  'Sur': { to: 'Ber', gem: 'Perfect' },
  'Ber': { to: 'Jah', gem: 'Perfect' },
  'Jah': { to: 'Cham', gem: 'Perfect' },
  'Cham': { to: 'Zod', gem: 'Perfect' },
};

export function getRuneUpgrades(inventory: RuneInventory): RuneUpgrade[] {
  const upgrades: RuneUpgrade[] = [];
  
  for (const rune of RUNES) {
    const count = inventory[rune.name] || 0;
    const upgradeInfo = RUNE_UPGRADES[rune.name];
    
    if (upgradeInfo && count >= 3) {
      const maxUpgrades = Math.floor(count / 3);
      upgrades.push({
        from: rune.name,
        to: upgradeInfo.to,
        gem: upgradeInfo.gem,
        maxUpgrades
      });
    }
  }
  
  return upgrades;
}

export function applyRuneUpgrade(
  inventory: RuneInventory,
  from: RuneName,
  to: RuneName,
  count: number = 1
): RuneInventory {
  const newInventory = { ...inventory };
  const runesNeeded = count * 3;
  
  if (newInventory[from] >= runesNeeded) {
    newInventory[from] -= runesNeeded;
    newInventory[to] = (newInventory[to] || 0) + count;
  }
  
  return newInventory;
}
