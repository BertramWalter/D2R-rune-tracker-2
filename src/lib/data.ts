import { Rune, Runeword } from './types';

export const RUNES: Rune[] = [
  { name: 'El', level: 11 },
  { name: 'Eld', level: 11 },
  { name: 'Tir', level: 13 },
  { name: 'Nef', level: 13 },
  { name: 'Eth', level: 15 },
  { name: 'Ith', level: 15 },
  { name: 'Tal', level: 17 },
  { name: 'Ral', level: 19 },
  { name: 'Ort', level: 21 },
  { name: 'Thul', level: 23 },
  { name: 'Amn', level: 25 },
  { name: 'Sol', level: 27 },
  { name: 'Shael', level: 29 },
  { name: 'Dol', level: 31 },
  { name: 'Hel', level: 33 },
  { name: 'Io', level: 35 },
  { name: 'Lum', level: 37 },
  { name: 'Ko', level: 39 },
  { name: 'Fal', level: 41 },
  { name: 'Lem', level: 43 },
  { name: 'Pul', level: 45 },
  { name: 'Um', level: 47 },
  { name: 'Mal', level: 49 },
  { name: 'Ist', level: 51 },
  { name: 'Gul', level: 53 },
  { name: 'Vex', level: 55 },
  { name: 'Ohm', level: 57 },
  { name: 'Lo', level: 59 },
  { name: 'Sur', level: 61 },
  { name: 'Ber', level: 63 },
  { name: 'Jah', level: 65 },
  { name: 'Cham', level: 67 },
  { name: 'Zod', level: 69 }
];

export const RUNEWORDS: Runeword[] = [
  {
    name: 'Ancient\'s Pledge',
    runes: ['Ral', 'Ort', 'Tal'],
    level: 21,
    itemTypes: ['Shield'],
    properties: ['+50% Enhanced Defense', 'Cold Resist +43%', 'Lightning Resist +48%', 'Fire Resist +48%', 'Poison Resist +48%', '10% Damage Goes To Mana']
  },
  {
    name: 'Black',
    runes: ['Thul', 'Io', 'Nef'],
    level: 35,
    itemTypes: ['Club', 'Hammer', 'Mace'],
    properties: ['+120% Enhanced Damage', '40% Chance of Crushing Blow', '+200 to Attack Rating', 'Adds 3-14 Cold Damage', '+10 to Vitality', 'Magic Damage Reduced By 2', 'Level 4 Corpse Explosion (12 Charges)']
  },
  {
    name: 'Fury',
    runes: ['Jah', 'Gul', 'Eth'],
    level: 65,
    itemTypes: ['Melee Weapon'],
    properties: ['+209% Enhanced Damage', '40% IAS', '66% Chance of Open Wounds', '33% Deadly Strike', 'Ignore Target Defense', '-25% Target Defense', '20% Bonus to Attack Rating', '6% Life Stolen per Hit', '+5 to Frenzy (Barbarian Only)']
  },
  {
    name: 'Holy Thunder',
    runes: ['Eth', 'Ral', 'Ort', 'Tal'],
    level: 21,
    itemTypes: ['Scepter'],
    properties: ['+60% Enhanced Damage', '+10 to Maximum Damage', '-25% Target Defense', 'Adds 5-30 Fire Damage', 'Adds 21-110 Lightning Damage', '+75 Poison Damage over 5 secs', '+3 to Holy Shock (Paladin Only)', '+5% to Maximum Lightning Resist', 'Lightning Resist +60%', 'Level 7 Chain Lightning (60 Charges)']
  },
  {
    name: 'Honor',
    runes: ['Amn', 'El', 'Ith', 'Tir', 'Sol'],
    level: 27,
    itemTypes: ['Melee Weapon'],
    properties: ['+160% Enhanced Damage', '+9 to Minimum Damage', '+9 to Maximum Damage', '+250 to Attack Rating', '7% Life Stolen per Hit', '25% Deadly Strike', '+10 to Strength', 'Replenish Life +10', '+1 to All Skills', '+2 to Mana After Each Kill']
  },
  {
    name: 'King\'s Grace',
    runes: ['Amn', 'Ral', 'Thul'],
    level: 25,
    itemTypes: ['Sword', 'Scepter'],
    properties: ['+100% Enhanced Damage', '+100 to Attack Rating', '+150 to Attack Rating', '+100% Damage to Demons', '+100 to Attack Rating against Demons', '+50% Damage to Undead', '+100 to Attack Rating against Undead']
  },
  {
    name: 'Leaf',
    runes: ['Tir', 'Ral'],
    level: 19,
    itemTypes: ['Staff'],
    properties: ['Adds 5-30 Fire Damage', '+3 to Fire Skills', '+3 to Fire Bolt (Sorceress Only)', '+3 to Inferno (Sorceress Only)', '+3 to Warmth (Sorceress Only)', '+2 to Mana After Each Kill', 'Cold Resist +33%', '+2 to Defense (Based on Character Level)']
  },
  {
    name: 'Lionheart',
    runes: ['Hel', 'Lum', 'Fal'],
    level: 41,
    itemTypes: ['Body Armor'],
    properties: ['+20% Enhanced Damage', '+25 to Strength', '+15 to Dexterity', '+20 to Vitality', '+10 to Energy', '+50 to Life', 'All Resistances +30', 'Requirements -15%']
  },
  {
    name: 'Lore',
    runes: ['Ort', 'Sol'],
    level: 27,
    itemTypes: ['Helm'],
    properties: ['+1 to All Skills', '+10 to Energy', 'Lightning Resist +30%', 'Damage Reduced by 7', '+2 to Mana After Each Kill', '+2 to Light Radius']
  },
  {
    name: 'Malice',
    runes: ['Ith', 'El', 'Eth'],
    level: 15,
    itemTypes: ['Melee Weapon'],
    properties: ['+33% Enhanced Damage', '+9 to Maximum Damage', '-25% Target Defense', '+50 to Attack Rating', '100% Chance of Open Wounds', 'Prevent Monster Heal', '-100 to Monster Defense Per Hit', 'Drain Life -5']
  },
  {
    name: 'Melody',
    runes: ['Shael', 'Ko', 'Nef'],
    level: 39,
    itemTypes: ['Missile Weapon'],
    properties: ['+50% Enhanced Damage', '+300% Damage to Undead', '+3 to Bow and Crossbow Skills (Amazon Only)', '+3 to Critical Strike (Amazon Only)', '+3 to Dodge (Amazon Only)', '+3 to Slow Missiles (Amazon Only)', '20% IAS', '+10 to Dexterity', 'Knockback']
  },
  {
    name: 'Memory',
    runes: ['Lum', 'Io', 'Sol', 'Eth'],
    level: 37,
    itemTypes: ['Staff'],
    properties: ['+3 to Energy Shield (Sorceress Only)', '+2 to Static Field (Sorceress Only)', '+50% Enhanced Defense', '+10 to Energy', '+10 to Vitality', '+9 to Minimum Damage', '-25% Target Defense', 'Magic Damage Reduced by 7', '+50% Defense vs. Missile', '+3 to All Skills', 'Increase Maximum Mana 20%']
  },
  {
    name: 'Nadir',
    runes: ['Nef', 'Tir'],
    level: 13,
    itemTypes: ['Helm'],
    properties: ['+50% Enhanced Defense', '+10 Defense', '+30 Defense vs. Missile', '+5 to Strength', '+2 to Mana After Each Kill', '-33% Extra Gold from Monsters', '-3 to Light Radius', 'Level 13 Cloak of Shadows (9 Charges)']
  },
  {
    name: 'Radiance',
    runes: ['Nef', 'Sol', 'Ith'],
    level: 27,
    itemTypes: ['Helm'],
    properties: ['+75% Enhanced Defense', '+30 Defense vs. Missile', '+10 to Energy', '+10 to Vitality', '15% Damage Goes to Mana', 'Magic Damage Reduced by 3', '+33 to Mana', 'Damage Reduced by 7', '+5 to Light Radius']
  },
  {
    name: 'Rhyme',
    runes: ['Shael', 'Eth'],
    level: 29,
    itemTypes: ['Shield'],
    properties: ['20% Increased Chance of Blocking', '40% Faster Block Rate', 'All Resistances +25', 'Regenerate Mana 15%', 'Cannot Be Frozen', '50% Extra Gold from Monsters', '25% Better Chance of Getting Magic Items']
  },
  {
    name: 'Silence',
    runes: ['Dol', 'Eld', 'Hel', 'Ist', 'Tir', 'Vex'],
    level: 55,
    itemTypes: ['Weapon'],
    properties: ['+200% Enhanced Damage', '+75% Damage to Undead', 'Requirements -20%', '20% IAS', '+50 to Attack Rating against Undead', '+2 to All Skills', 'All Resistances +75', '20% Faster Hit Recovery', '11% Mana Stolen per Hit', 'Hit Causes Monster to Flee 25%', 'Hit Blinds Target +33', '+2 to Mana After Each Kill', '30% Better Chance of Getting Magic Items']
  },
  {
    name: 'Smoke',
    runes: ['Nef', 'Lum'],
    level: 37,
    itemTypes: ['Body Armor'],
    properties: ['+75% Enhanced Defense', '+280 Defense vs. Missile', 'All Resistances +50', '20% Faster Hit Recovery', 'Level 6 Weaken (18 Charges)', '+10 to Energy', '-1 to Light Radius']
  },
  {
    name: 'Stealth',
    runes: ['Tal', 'Eth'],
    level: 17,
    itemTypes: ['Body Armor'],
    properties: ['25% Faster Run/Walk', '25% Faster Cast Rate', '25% Faster Hit Recovery', '+6 to Dexterity', 'Regenerate Mana 15%', '+15 to Maximum Stamina', 'Poison Resist +30%', 'Magic Damage Reduced by 3']
  },
  {
    name: 'Steel',
    runes: ['Tir', 'El'],
    level: 13,
    itemTypes: ['Sword', 'Axe', 'Mace'],
    properties: ['20% Enhanced Damage', '+3 to Minimum Damage', '+3 to Maximum Damage', '+50 to Attack Rating', '50% Chance of Open Wounds', '25% IAS', '+2 to Mana After Each Kill', '+1 to Light Radius']
  },
  {
    name: 'Strength',
    runes: ['Amn', 'Tir'],
    level: 25,
    itemTypes: ['Melee Weapon'],
    properties: ['35% Enhanced Damage', '7% Life Stolen per Hit', '25% Chance of Crushing Blow', '+20 to Strength', '+10 to Vitality', '+2 to Mana After Each Kill']
  },
  {
    name: 'Venom',
    runes: ['Tal', 'Dol', 'Mal'],
    level: 49,
    itemTypes: ['Weapon'],
    properties: ['Hit Causes Monster to Flee 25%', 'Prevent Monster Heal', 'Ignore Target Defense', '7% Mana Stolen per Hit', 'Level 15 Poison Explosion (27 Charges)', 'Level 13 Poison Nova (11 Charges)', '+273 Poison Damage over 6 secs']
  },
  {
    name: 'Wealth',
    runes: ['Lem', 'Ko', 'Tir'],
    level: 43,
    itemTypes: ['Body Armor'],
    properties: ['+10 to Dexterity', '+2 to Mana After Each Kill', '300% Extra Gold from Monsters', '100% Better Chance of Getting Magic Items']
  },
  {
    name: 'White',
    runes: ['Dol', 'Io'],
    level: 35,
    itemTypes: ['Wand'],
    properties: ['+3 to Poison and Bone Skills (Necromancer Only)', '+3 to Bone Armor (Necromancer Only)', '+2 to Bone Spear (Necromancer Only)', '+4 to Skeleton Mastery (Necromancer Only)', 'Magic Damage Reduced by 4', '20% Faster Cast Rate', '+10 to Vitality']
  },
  {
    name: 'Zephyr',
    runes: ['Ort', 'Eth'],
    level: 21,
    itemTypes: ['Missile Weapon'],
    properties: ['+33% Enhanced Damage', '+66 to Attack Rating', 'Adds 1-50 Lightning Damage', '-25% Target Defense', '+25 Defense', '25% Faster Run/Walk', '25% IAS', '7% Chance to Cast Level 1 Twister When Struck']
  },
  {
    name: 'Beast',
    runes: ['Ber', 'Tir', 'Um', 'Mal', 'Lum'],
    level: 63,
    itemTypes: ['Axe', 'Scepter', 'Hammer'],
    properties: ['Level 9 Fanaticism Aura When Equipped', '+40% IAS', '+240-270% Enhanced Damage', '20% Chance of Crushing Blow', '25% Chance of Open Wounds', '+3 to Werebear', '+3 to Lycanthropy', 'Prevent Monster Heal', '+25-40 to Strength', '+10 to Energy', '+2 to Mana After Each Kill', 'Level 13 Summon Grizzly (5 Charges)']
  },
  {
    name: 'Bramble',
    runes: ['Ral', 'Ohm', 'Sur', 'Eth'],
    level: 61,
    itemTypes: ['Body Armor'],
    properties: ['Level 15-21 Thorns Aura When Equipped', '+50% Faster Hit Recovery', '+25-50% to Poison Skill Damage', '+300 Defense', 'Increase Maximum Mana 5%', 'Regenerate Mana 15%', '+5% to Maximum Cold Resist', 'Fire Resist +30%', 'Poison Resist +100%', '+13 Life After Each Kill', 'Level 13 Spirit of Barbs (33 Charges)']
  },
  {
    name: 'Breath of the Dying',
    runes: ['Vex', 'Hel', 'El', 'Eld', 'Zod', 'Eth'],
    level: 69,
    itemTypes: ['Weapon'],
    properties: ['50% Chance to Cast Level 20 Poison Nova When You Kill an Enemy', 'Indestructible', '+60% IAS', '+350-400% Enhanced Damage', '-25% Target Defense', '+50 to Attack Rating', '+200% Damage to Undead', '+50 to Attack Rating Against Undead', '7% Mana Stolen per Hit', '12-15% Life Stolen per Hit', 'Prevent Monster Heal', '+30 to All Attributes', '+1 to Light Radius', 'Requirements -20%']
  },
  {
    name: 'Call to Arms',
    runes: ['Amn', 'Ral', 'Mal', 'Ist', 'Ohm'],
    level: 57,
    itemTypes: ['Weapon'],
    properties: ['+1 to All Skills', '+40% IAS', '+240-290% Enhanced Damage', 'Adds 5-30 Fire Damage', '7% Life Stolen per Hit', '+2-6 to Battle Command', '+1-6 to Battle Orders', '+1-4 to Battle Cry', 'Prevent Monster Heal', 'Replenish Life +12', '30% Better Chance of Getting Magic Items']
  },
  {
    name: 'Chains of Honor',
    runes: ['Dol', 'Um', 'Ber', 'Ist'],
    level: 63,
    itemTypes: ['Body Armor'],
    properties: ['+2 to All Skills', '+200% Damage to Demons', '+100% Damage to Undead', '8% Life Stolen per Hit', '+70% Enhanced Defense', '+20 to Strength', 'Replenish Life +7', 'All Resistances +65', 'Damage Reduced by 8%', '25% Better Chance of Getting Magic Items']
  },
  {
    name: 'Chaos',
    runes: ['Fal', 'Ohm', 'Um'],
    level: 57,
    itemTypes: ['Claw'],
    properties: ['9% Chance to Cast Level 11 Frozen Orb on Striking', '11% Chance to Cast Level 9 Charged Bolt on Striking', '+35% IAS', '+290-340% Enhanced Damage', 'Adds 216-471 Magic Damage', '25% Chance of Open Wounds', '+1 to Whirlwind', '+10 to Strength', '+15 Life After Each Demon Kill']
  },
  {
    name: 'Crescent Moon',
    runes: ['Shael', 'Um', 'Tir'],
    level: 47,
    itemTypes: ['Axe', 'Sword', 'Polearm'],
    properties: ['10% Chance to Cast Level 17 Chain Lightning on Striking', '7% Chance to Cast Level 13 Static Field on Striking', '+20% IAS', '+180-220% Enhanced Damage', 'Ignore Target Defense', '-35% to Enemy Lightning Resist', '25% Chance of Open Wounds', '+9-11 Magic Absorb', '+2 to Mana After Each Kill', 'Level 18 Summon Spirit Wolf (30 Charges)']
  },
  {
    name: 'Delirium',
    runes: ['Lem', 'Ist', 'Io'],
    level: 51,
    itemTypes: ['Helm'],
    properties: ['1% Chance to Cast Level 50 Delirium When Struck', '6% Chance to Cast Level 14 Mind Blast When Struck', '14% Chance to Cast Level 13 Terror When Struck', '11% Chance to Cast Level 18 Confuse on Striking', '+2 to All Skills', '+261 Defense', '+10 to Vitality', '50% Extra Gold from Monsters', '25% Better Chance of Getting Magic Items', 'Level 17 Attract (60 Charges)']
  },
  {
    name: 'Doom',
    runes: ['Hel', 'Ohm', 'Um', 'Lo', 'Cham'],
    level: 67,
    itemTypes: ['Axe', 'Polearm', 'Hammer'],
    properties: ['5% Chance to Cast Level 18 Volcano on Striking', 'Level 12 Holy Freeze Aura When Equipped', '+2 to All Skills', '+45% IAS', '+330-370% Enhanced Damage', '-40-60% to Enemy Cold Resist', '20% Deadly Strike', '25% Chance of Open Wounds', 'Prevent Monster Heal', 'Freezes Target +3', 'Requirements -20%']
  },
  {
    name: 'Duress',
    runes: ['Shael', 'Um', 'Thul'],
    level: 47,
    itemTypes: ['Body Armor'],
    properties: ['+40% Faster Hit Recovery', '+10-20% Enhanced Damage', 'Adds 37-133 Cold Damage', '15% Crushing Blow', '33% Chance of Open Wounds', '+150-200% Enhanced Defense', '-20% Slower Stamina Drain', 'Cold Resist +45%', 'Lightning Resist +15%', 'Fire Resist +15%', 'Poison Resist +15%']
  },
  {
    name: 'Enigma',
    runes: ['Jah', 'Ith', 'Ber'],
    level: 65,
    itemTypes: ['Body Armor'],
    properties: ['+2 to All Skills', '+45% Faster Run/Walk', '+1 to Teleport', '+750-775 Defense', '+0.75 Defense Per Character Level', 'Increase Maximum Life 5%', 'Damage Reduced by 8%', '+14 Life After Each Kill', '15% Damage Taken Goes to Mana', '+1 to Magic Find Per Character Level']
  },
  {
    name: 'Eternity',
    runes: ['Amn', 'Ber', 'Ist', 'Sol', 'Sur'],
    level: 63,
    itemTypes: ['Melee Weapon'],
    properties: ['Indestructible', '+260-310% Enhanced Damage', '+9 to Minimum Damage', '7% Life Stolen per Hit', '20% Chance of Crushing Blow', 'Hit Blinds Target', 'Slows Target by 33%', 'Regenerate Mana 16%', 'Replenish Life +16', 'Cannot Be Frozen', '30% Better Chance of Getting Magic Items', 'Level 8 Revive (88 Charges)']
  },
  {
    name: 'Exile',
    runes: ['Vex', 'Ohm', 'Ist', 'Dol'],
    level: 57,
    itemTypes: ['Paladin Shield'],
    properties: ['15% Chance to Cast Level 5 Life Tap on Striking', 'Level 13-16 Defiance Aura When Equipped', '+2 to Offensive Auras (Paladin Only)', '+30% Faster Block Rate', 'Freezes Target', '+220-260% Enhanced Defense', 'Replenish Life +7', '+5% to Maximum Cold Resist', '+5% to Maximum Fire Resist', '25% Better Chance of Getting Magic Items', 'Repairs 1 Durability in 4 Seconds']
  },
  {
    name: 'Famine',
    runes: ['Fal', 'Ohm', 'Ort', 'Jah'],
    level: 65,
    itemTypes: ['Axe', 'Hammer'],
    properties: ['+30% IAS', '+320-370% Enhanced Damage', 'Ignore Target Defense', 'Adds 180-200 Magic Damage', 'Adds 50-200 Fire Damage', 'Adds 51-250 Lightning Damage', 'Adds 50-200 Cold Damage', '12% Life Stolen per Hit', 'Prevent Monster Heal', '+10 to Strength']
  },
  {
    name: 'Gloom',
    runes: ['Fal', 'Um', 'Pul'],
    level: 47,
    itemTypes: ['Body Armor'],
    properties: ['15% Chance to Cast Level 3 Dim Vision When Struck', '+10% Faster Hit Recovery', '+200-260% Enhanced Defense', '+10 to Strength', 'All Resistances +45', 'Half Freeze Duration', '5% Damage Taken Goes to Mana', '-3 to Light Radius']
  },
  {
    name: 'Hand of Justice',
    runes: ['Sur', 'Cham', 'Amn', 'Lo'],
    level: 67,
    itemTypes: ['Weapon'],
    properties: ['100% Chance to Cast Level 36 Blaze When You Level-Up', '100% Chance to Cast Level 48 Meteor When You Die', 'Level 16 Holy Fire Aura When Equipped', '+33% IAS', '+280-330% Enhanced Damage', 'Ignore Target Defense', '-20% to Enemy Fire Resist', '7% Life Stolen per Hit', '+200 Defense vs. Missile', '+10 to Dexterity', 'Replenish Life +10', '+2 to Mana After Each Kill', '+50 to Life', '+1 to Light Radius']
  },
  {
    name: 'Heart of the Oak',
    runes: ['Ko', 'Vex', 'Pul', 'Thul'],
    level: 55,
    itemTypes: ['Staff', 'Mace'],
    properties: ['+3 to All Skills', '+40% Faster Cast Rate', '+75% Damage to Demons', '+100 to Attack Rating Against Demons', 'Adds 3-14 Cold Damage', '7% Mana Stolen per Hit', '+10 to Dexterity', 'Replenish Life +20', 'Increase Maximum Mana 15%', 'All Resistances +30-40', 'Level 4 Oak Sage (25 Charges)', 'Level 14 Raven (60 Charges)']
  },
  {
    name: 'Kingslayer',
    runes: ['Mal', 'Um', 'Gul', 'Fal'],
    level: 53,
    itemTypes: ['Sword', 'Axe'],
    properties: ['+30% IAS', '+230-270% Enhanced Damage', '-25% Target Defense', '20% Bonus to Attack Rating', '33% Chance of Crushing Blow', '50% Chance of Open Wounds', '+1 to Vengeance', 'Prevent Monster Heal', '+10 to Strength', '40% Extra Gold from Monsters']
  },
  {
    name: 'Passion',
    runes: ['Dol', 'Ort', 'Eld', 'Lem'],
    level: 43,
    itemTypes: ['Weapon'],
    properties: ['+25% IAS', '+160-210% Enhanced Damage', '50-80% Bonus to Attack Rating', '+75% Damage to Undead', '+50 to Attack Rating Against Undead', 'Adds 1-50 Lightning Damage', '+1 to Berserk', '+1 to Zeal', 'Hit Blinds Target +10', 'Hit Causes Monster to Flee 25%', '75% Extra Gold from Monsters', 'Level 3 Heart of Wolverine (12 Charges)']
  },
  {
    name: 'Prudence',
    runes: ['Mal', 'Tir'],
    level: 49,
    itemTypes: ['Body Armor'],
    properties: ['+25% Faster Hit Recovery', '+140-170% Enhanced Defense', 'All Resistances +25-35', 'Damage Reduced by 3', 'Magic Damage Reduced by 17', '+2 to Mana After Each Kill', '+1 to Light Radius', 'Repairs 1 Durability in 4 Seconds']
  },
  {
    name: 'Sanctuary',
    runes: ['Ko', 'Ko', 'Mal'],
    level: 49,
    itemTypes: ['Shield'],
    properties: ['+20% Faster Hit Recovery', '+20% Faster Block Rate', '20% Increased Chance of Blocking', '+130-160% Enhanced Defense', '+250 Defense vs. Missile', '+20 to Dexterity', 'All Resistances +50-70', 'Magic Damage Reduced by 7', 'Level 12 Slow Missiles (60 Charges)']
  },
  {
    name: 'Splendor',
    runes: ['Eth', 'Lum'],
    level: 37,
    itemTypes: ['Shield'],
    properties: ['+1 to All Skills', '+10% Faster Cast Rate', '+20% Faster Block Rate', '+60-100% Enhanced Defense', '+10 to Energy', 'Regenerate Mana 15%', '50% Extra Gold from Monsters', '20% Better Chance of Getting Magic Items', '+3 to Light Radius']
  },
  {
    name: 'Stone',
    runes: ['Shael', 'Um', 'Pul', 'Lum'],
    level: 47,
    itemTypes: ['Body Armor'],
    properties: ['+60% Faster Hit Recovery', '+250-290% Enhanced Defense', '+300 Defense vs. Missile', '+16 to Strength', '+16 to Vitality', '+10 to Energy', 'All Resistances +15', 'Level 16 Molten Boulder (80 Charges)', 'Level 16 Clay Golem (16 Charges)']
  },
  {
    name: 'Wind',
    runes: ['Sur', 'El'],
    level: 61,
    itemTypes: ['Melee Weapon'],
    properties: ['10% Chance to Cast Level 9 Tornado on Striking', '+20% Faster Run/Walk', '+40% IAS', '+15% Faster Hit Recovery', '+120-160% Enhanced Damage', '-50% Target Defense', '+50 to Attack Rating', 'Hit Blinds Target', '+1 to Light Radius', 'Level 13 Twister (127 Charges)']
  },
  {
    name: 'Insight',
    runes: ['Ral', 'Tir', 'Tal', 'Sol'],
    level: 27,
    itemTypes: ['Polearm', 'Staff'],
    properties: ['Level 12-17 Meditation Aura When Equipped', '+35% Faster Cast Rate', '+200-260% Enhanced Damage', '+9 to Minimum Damage', '180-250% Bonus to Attack Rating', 'Adds 5-30 Fire Damage', '+75 Poison Damage over 5 secs', '+1-6 to Critical Strike', '+5 to All Attributes', '+2 to Mana After Each Kill', '23% Better Chance of Getting Magic Items']
  },
  {
    name: 'Obedience',
    runes: ['Hel', 'Ko', 'Thul', 'Eth', 'Fal'],
    level: 41,
    itemTypes: ['Polearm'],
    properties: ['30% Chance to Cast Level 21 Enchant When You Kill an Enemy', '+40% Faster Hit Recovery', '+370% Enhanced Damage', '-25% Target Defense', 'Adds 3-14 Cold Damage', '-25% to Enemy Fire Resist', '40% Chance of Crushing Blow', '+200-300 Defense', '+10 to Strength', '+10 to Dexterity', 'All Resistances +20-30', 'Requirements -20%']
  },
  {
    name: 'Lawbringer',
    runes: ['Amn', 'Lem', 'Ko'],
    level: 43,
    itemTypes: ['Sword', 'Hammer', 'Scepter'],
    properties: ['20% Chance to Cast Level 15 Decrepify on Striking', 'Level 16-18 Sanctuary Aura When Equipped', '-50% Target Defense', 'Adds 150-210 Fire Damage', 'Adds 130-180 Cold Damage', '7% Life Stolen per Hit', 'Slows Target by 25%', '+200-250 Defense vs. Missile', '+10 to Dexterity', '75% Extra Gold from Monsters']
  },
  {
    name: 'Fortitude',
    runes: ['El', 'Sol', 'Dol', 'Lo'],
    level: 59,
    itemTypes: ['Weapon', 'Body Armor'],
    properties: ['20% Chance to Cast Level 15 Chilling Armor When Struck', '+25% Faster Cast Rate', '+300% Enhanced Damage', '+200% Enhanced Defense', '+15 Defense', '+X to Life (Based on Character Level)', 'Replenish Life +7', '+5% to Maximum Lightning Resist', 'All Resistances +25-30', 'Damage Reduced by 7', '12% Damage Taken Goes to Mana', '+1 to Light Radius']
  },
  {
    name: 'Grief',
    runes: ['Eth', 'Tir', 'Lo', 'Mal', 'Ral'],
    level: 59,
    itemTypes: ['Sword', 'Axe'],
    properties: ['35% Chance to Cast Level 15 Venom on Striking', '+30-40% IAS', 'Damage +340-400', 'Ignore Target Defense', '-25% Target Defense', '+1.875 Damage Per Character Level', '+20 to Attack Rating', '+10 to Dexterity', 'All Resistances +15', '-20% to Enemy Poison Resist', '+10 to Life After Each Kill']
  },
  {
    name: 'Harmony',
    runes: ['Tir', 'Ith', 'Sol', 'Ko'],
    level: 39,
    itemTypes: ['Missile Weapon'],
    properties: ['Level 10 Vigor Aura When Equipped', '+200-275% Enhanced Damage', '+9 to Minimum Damage', '+9 to Maximum Damage', 'Adds 55-160 Lightning Damage', 'Adds 55-160 Fire Damage', 'Adds 55-160 Cold Damage', '+2-6 to Valkyrie', '+10 to Dexterity', 'Regenerate Mana 20%', '+2 to Mana After Each Kill', '+2 to Light Radius', 'Level 20 Revive (25 Charges)']
  },
  {
    name: 'Ice',
    runes: ['Amn', 'Shael', 'Jah', 'Lo'],
    level: 65,
    itemTypes: ['Missile Weapon'],
    properties: ['100% Chance to Cast Level 40 Blizzard When You Level-Up', '25% Chance to Cast Level 22 Frost Nova on Striking', 'Level 18 Holy Freeze Aura When Equipped', '+20% IAS', '+140-210% Enhanced Damage', 'Ignore Target Defense', '+25-30% to Cold Skill Damage', '-20% to Enemy Cold Resist', '7% Life Stolen per Hit', '20% Deadly Strike', '+3.125-309.375 Cold Damage', '+240-290 Defense vs. Missile', '+10 to Dexterity']
  },
  {
    name: 'Infinity',
    runes: ['Ber', 'Mal', 'Ber', 'Ist'],
    level: 63,
    itemTypes: ['Polearm'],
    properties: ['50% Chance to Cast Level 20 Chain Lightning When You Kill an Enemy', 'Level 12 Conviction Aura When Equipped', '+35% Faster Run/Walk', '+255-325% Enhanced Damage', '-45-55% to Enemy Lightning Resist', '40% Chance of Crushing Blow', 'Prevent Monster Heal', '+0.5 Vitality Per Character Level', '30% Better Chance of Getting Magic Items', 'Level 21 Cyclone Armor (30 Charges)']
  },
  {
    name: 'Last Wish',
    runes: ['Jah', 'Mal', 'Jah', 'Sur', 'Jah', 'Ber'],
    level: 65,
    itemTypes: ['Sword', 'Hammer', 'Axe'],
    properties: ['6% Chance to Cast Level 11 Fade When Struck', '10% Chance to Cast Level 18 Life Tap on Striking', '20% Chance to Cast Level 20 Charged Bolt on Attack', 'Level 17 Might Aura When Equipped', '+330-375% Enhanced Damage', 'Ignore Target Defense', '60-70% Chance of Crushing Blow', 'Prevent Monster Heal', 'Hit Blinds Target', '+0.5-49.5 to Magic Find (Based on Character Level)']
  },
  {
    name: 'Phoenix',
    runes: ['Vex', 'Vex', 'Lo', 'Jah'],
    level: 65,
    itemTypes: ['Weapon', 'Shield'],
    properties: ['100% Chance to Cast Level 40 Blaze When You Level-Up', '40% Chance to Cast Level 22 Firestorm on Striking', 'Level 10-15 Redemption Aura When Equipped', '+350-400% Enhanced Damage', '+350-400 Defense vs. Missile', '-28% to Enemy Fire Resist', '+50 to Life', '+5% to Maximum Lightning Resist', '+10% to Maximum Fire Resist', '+15-21 Fire Absorb', 'Ignores Target Defense', '14% Mana Stolen per Hit', '20% Deadly Strike']
  },
  {
    name: 'Pride',
    runes: ['Cham', 'Sur', 'Io', 'Lo'],
    level: 67,
    itemTypes: ['Polearm'],
    properties: ['25% Chance to Cast Level 17 Fire Wall When Struck', 'Level 16-20 Concentration Aura When Equipped', '260-300% Bonus to Attack Rating', '+1-99 Lightning Damage', '7% Life Stolen per Hit', '+20% Faster Hit Recovery', '+200-260% Damage to Demons', '+200-260% Enhanced Damage', 'Hit Blinds Target +10', 'Freezes Target +3', '+10 to Vitality', 'Replenish Life +8', '+1.875-185.625% Damage to Undead']
  },
  {
    name: 'Rift',
    runes: ['Hel', 'Ko', 'Lem', 'Gul'],
    level: 53,
    itemTypes: ['Polearm', 'Scepter'],
    properties: ['20% Chance to Cast Level 16 Tornado on Striking', '16% Chance to Cast Level 21 Frozen Orb on Attack', '20% Bonus to Attack Rating', 'Adds 160-250 Magic Damage', 'Adds 60-180 Fire Damage', '+5-10 to All Attributes', '+10 to Dexterity', '38% Damage Taken Goes to Mana', '75% Extra Gold from Monsters', 'Level 15 Iron Maiden (40 Charges)', 'Requirements -20%']
  },
  {
    name: 'Spirit',
    runes: ['Tal', 'Thul', 'Ort', 'Amn'],
    level: 25,
    itemTypes: ['Sword', 'Shield'],
    properties: ['+2 to All Skills', '+25-35% Faster Cast Rate', '+55% Faster Hit Recovery', '+250 Defense vs. Missile', '+22 to Vitality', '+89-112 to Mana', '+3-8 Magic Absorb', 'Cold Resist +35%', 'Lightning Resist +35%', 'Poison Resist +35%', 'Attacker Takes Damage of 14']
  },
  {
    name: 'Treachery',
    runes: ['Shael', 'Thul', 'Lem'],
    level: 43,
    itemTypes: ['Body Armor'],
    properties: ['5% Chance to Cast Level 15 Fade When Struck', '25% Chance to Cast Level 15 Venom on Striking', '+2 to Assassin Skills', '+45% IAS', '+20% Faster Hit Recovery', 'Cold Resist +30%', '50% Extra Gold from Monsters']
  },
  {
    name: 'Bone',
    runes: ['Sol', 'Um', 'Um'],
    level: 47,
    itemTypes: ['Body Armor'],
    properties: ['15% Chance to Cast Level 10 Bone Armor When Struck', '15% Chance to Cast Level 10 Bone Spear on Striking', '+2 to Necromancer Skill Levels', '+100-150 to Mana', 'All Resistances +30', 'Damage Reduced by 7']
  },
  {
    name: 'Enlightenment',
    runes: ['Pul', 'Ral', 'Sol'],
    level: 45,
    itemTypes: ['Body Armor'],
    properties: ['5% Chance to Cast Level 15 Blaze When Struck', '5% Chance to Cast Level 15 Fire Ball on Striking', '+2 to Sorceress Skill Levels', '+1 to Warmth', '+30% Enhanced Defense', 'Fire Resist +30%', 'Damage Reduced by 7']
  },
  {
    name: 'Myth',
    runes: ['Hel', 'Amn', 'Nef'],
    level: 33,
    itemTypes: ['Body Armor'],
    properties: ['3% Chance to Cast Level 1 Howl When Struck', '10% Chance to Cast Level 1 Taunt on Striking', '+2 to Barbarian Skill Levels', '+30 Defense vs. Missile', 'Replenish Life +10', 'Attacker Takes Damage of 14', 'Requirements -15%']
  },
  {
    name: 'Peace',
    runes: ['Shael', 'Thul', 'Amn'],
    level: 29,
    itemTypes: ['Body Armor'],
    properties: ['4% Chance to Cast Level 5 Slow Missiles When Struck', '2% Chance to Cast Level 15 Valkyrie on Striking', '+2 to Amazon Skill Levels', '+20% Faster Hit Recovery', '+2 to Critical Strike', 'Cold Resist +30%', 'Attacker Takes Damage of 14']
  },
  {
    name: 'Principle',
    runes: ['Ral', 'Gul', 'Eld'],
    level: 53,
    itemTypes: ['Body Armor'],
    properties: ['100% Chance to Cast Level 5 Holy Bolt on Striking', '+2 to Paladin Skill Levels', '+50% Damage to Undead', '+100-150 to Life', '15% Slower Stamina Drain', '+5% to Maximum Poison Resist', 'Fire Resist +30%']
  },
  {
    name: 'Rain',
    runes: ['Ort', 'Mal', 'Ith'],
    level: 49,
    itemTypes: ['Body Armor'],
    properties: ['5% Chance to Cast Level 15 Cyclone Armor When Struck', '5% Chance to Cast Level 15 Twister on Striking', '+2 to Druid Skills', '+100-150 to Mana', 'Lightning Resist +30%', 'Magic Damage Reduced by 7', '15% Damage Taken Goes to Mana']
  },
  {
    name: 'Edge',
    runes: ['Tir', 'Tal', 'Amn'],
    level: 25,
    itemTypes: ['Missile Weapon'],
    properties: ['Level 15 Thorns Aura When Equipped', '+35% IAS', '+320-380% Damage to Demons', '+280% Damage to Undead', '+75 Poison Damage over 5 secs', '7% Life Stolen per Hit', 'Prevent Monster Heal', '+5-10 to All Attributes', '+2 to Mana After Each Kill', 'Reduces All Vendor Prices 15%']
  },
  {
    name: 'Plague',
    runes: ['Cham', 'Shael', 'Um'],
    level: 67,
    itemTypes: ['Sword'],
    properties: ['25% Chance to Cast Level 15 Poison Nova on Striking', '20% Chance to Cast Level 12 Lower Resist When Struck', 'Level 13-17 Cleansing Aura When Equipped', '+1-2 to All Skills', '+20% IAS', '+220-320% Enhanced Damage', '-23% to Enemy Poison Resist', '+0.3 Poison Damage Per Character Level', '+25% Deadly Strike']
  },
  {
    name: 'Dream',
    runes: ['Io', 'Jah', 'Pul'],
    level: 65,
    itemTypes: ['Helm', 'Shield'],
    properties: ['10% Chance to Cast Level 15 Confuse When Struck', 'Level 15 Holy Shock Aura When Equipped', '+20-30% Faster Hit Recovery', '+30% Enhanced Defense', '+150-220 Defense', '+10 to Vitality', 'Increase Maximum Life 5%', '+0.625-61.875 to Mana', 'All Resistances +5-20', '12-25% Better Chance of Getting Magic Items']
  },
  {
    name: 'Unbending Will',
    runes: ['Fal', 'Io', 'Ith', 'Eld', 'El', 'Hel'],
    level: 41,
    itemTypes: ['Sword'],
    properties: ['18% Chance to Cast Level 18 Taunt on Striking', '+3 to Combat Skills (Barbarian Only)', '+20-30% IAS', '+300-350% Enhanced Damage', '+9 to Maximum Damage', '+50 to Attack Rating', '+75 Damage to Undead', '+50 to Attack Rating Against Undead', '8-10% Life Stolen per Hit', 'Prevent Monster Heal', '+10 to Strength', '+10 to Vitality', 'Damage Reduced by 8', '+1 to Light Radius']
  },
  {
    name: 'Wisdom',
    runes: ['Pul', 'Ith', 'Eld'],
    level: 45,
    itemTypes: ['Helm'],
    properties: ['+33% Piercing Attack', '+15-25% Bonus to Attack Rating', '4-8% Mana Stolen per Hit', '+30% Enhanced Defense', '+10 to Energy', '15% Slower Stamina Drain', 'Cannot Be Frozen', '+5 to Mana After Each Kill', '15% Damage Taken Goes to Mana']
  },
  {
    name: 'Mist',
    runes: ['Cham', 'Shael', 'Gul', 'Thul', 'Ith'],
    level: 67,
    itemTypes: ['Missile Weapon'],
    properties: ['Level 8-12 Concentration Aura When Equipped', '+3 to All Skills', '+20% IAS', '+100% Piercing Attack', '+325-375% Enhanced Damage', '+9 to Maximum Damage', '20% Bonus to Attack Rating', 'Adds 3-14 Cold Damage', 'Freeze Target +3', '+24 to Vitality', 'All Resistances +40']
  },
  {
    name: 'Brand',
    runes: ['Jah', 'Lo', 'Mal', 'Gul'],
    level: 65,
    itemTypes: ['Missile Weapon'],
    properties: ['35% Chance to Cast Level 14 Amplify Damage When Struck', '100% Chance to Cast Level 18 Bone Spear on Striking', 'Fires Explosive Arrows or Bolts', '+260-340% Enhanced Damage', 'Ignore Target Defense', '20% Bonus to Attack Rating', '+280-330% Damage to Demons', '20% Deadly Strike', 'Prevent Monster Heal', 'Knockback']
  },
  {
    name: 'Flickering Flame',
    runes: ['Nef', 'Pul', 'Vex'],
    level: 55,
    itemTypes: ['Helm'],
    properties: ['Level 4-8 Resist Fire Aura When Equipped', '+3 to Fire Skills', '-10-15% to Enemy Fire Resist', '+30% Enhanced Defense', '+30 Defense vs. Missile', '+50-75 to Mana', 'Half Freeze Duration', '+5% to Maximum Fire Resist', 'Poison Length Reduced by 50%']
  },
  {
    name: 'Mosaic',
    runes: ['Mal', 'Gul', 'Amn'],
    level: 53,
    itemTypes: ['Claw'],
    properties: ['+50% Chance for Finishing Moves to Not Consume Charges', 'When a Finisher is Executed This Way, It Gains +3 to Skill Level Range', '+2 to Assassin Skills', '+40% IAS', '+20% Bonus to Attack Rating', '+200-250% Enhanced Damage', '20% Chance of Crushing Blow', '+(2.5 per Character Level) 2-247 to Defense', 'Cannot Be Frozen']
  },
  {
    name: 'Pattern',
    runes: ['Tal', 'Ort', 'Thul'],
    level: 23,
    itemTypes: ['Claw'],
    properties: ['+30% Faster Block Rate', '+40-80% Enhanced Damage', '10% Bonus to Attack Rating', 'Adds 17-62 Fire Damage', 'Adds 1-50 Lightning Damage', 'Adds 3-14 Cold Damage', '+75 Poison Damage over 5 secs', '+6 to Strength', '+6 to Dexterity', 'All Resistances +15']
  },
  {
    name: 'Obsession',
    runes: ['Zod', 'Ist', 'Lem', 'Lum', 'Io', 'Nef'],
    level: 69,
    itemTypes: ['Staff'],
    properties: ['Indestructible', '24% Chance to Cast Level 10 Weaken When Struck', '+4 to All Skills', '+65% Faster Cast Rate', '+60% Faster Hit Recovery', 'Knockback', '+10 to Vitality', '+10 to Energy', 'Increase Maximum Life 15-25%', 'Regenerate Mana 15-30%', 'All Resistances +60-70', '75% Extra Gold from Monsters', '30% Better Chance of Getting Magic Items']
  },
  {
    name: 'Bulwark',
    runes: ['Shael', 'Io', 'Sol'],
    level: 35,
    itemTypes: ['Shield'],
    properties: ['+20% Faster Hit Recovery', '+4-6% Life Stolen per Hit', '+75-100% Enhanced Defense', '+10 to Vitality', 'Increase Maximum Life 5%', 'Replenish Life +30', 'Damage Reduced by 7']
  },
  {
    name: 'Cure',
    runes: ['Shael', 'Io', 'Tal'],
    level: 35,
    itemTypes: ['Helm'],
    properties: ['+20% Faster Hit Recovery', '+130-160% Enhanced Defense', '+30 to Vitality', 'Poison Resist +35-45%', 'Poison Length Reduced by 50%', 'Cure Poison Duration in 1 Second', 'Level 18 Cleansing Aura When Equipped']
  },
  {
    name: 'Ground',
    runes: ['Shael', 'Io', 'Ort'],
    level: 35,
    itemTypes: ['Body Armor'],
    properties: ['+20% Faster Hit Recovery', '+200-240% Enhanced Defense', '+30 to Vitality', 'Lightning Resist +30-40%', 'Lightning Absorb +10-20%', 'Attacker Takes Lightning Damage of 10-20']
  },
  {
    name: 'Hearth',
    runes: ['Shael', 'Io', 'Thul'],
    level: 35,
    itemTypes: ['Body Armor'],
    properties: ['+20% Faster Hit Recovery', '+200-240% Enhanced Defense', '+30 to Vitality', 'Cold Resist +30-40%', 'Half Freeze Duration', 'Cannot Be Frozen']
  },
  {
    name: 'Temper',
    runes: ['Shael', 'Io', 'Ral'],
    level: 35,
    itemTypes: ['Body Armor'],
    properties: ['+20% Faster Hit Recovery', '+200-240% Enhanced Defense', '+30 to Vitality', 'Fire Resist +30-40%', 'Fire Absorb +10-20%', 'Attacker Takes Fire Damage of 10-20']
  },
  {
    name: 'Hustle',
    runes: ['Shael', 'Ko', 'Eld'],
    level: 39,
    itemTypes: ['Body Armor', 'Weapon'],
    properties: ['+65% Faster Run/Walk', '+40% IAS', '+20% Faster Hit Recovery', '+6 to Evade', '+10 to Dexterity', '50% Slower Stamina Drain', '+All Resistances +10', '+300 Defense']
  },
  {
    name: 'Metamorphosis',
    runes: ['Io', 'Cham', 'Fal'],
    level: 67,
    itemTypes: ['Helm'],
    properties: ['+50-60% Enhanced Defense', '+10 to Strength', '+10 to Dexterity', 'All Resistances +10-15', 'Cannot Be Frozen', 'Werewolf Form Damage Bonus +25%', 'Werebear Form Damage Bonus +25%', '+5-10 to Shape Shifting Skills (Druid Only)']
  },
  {
    name: 'Plague Bearer',
    runes: ['Lem', 'Mal', 'Tir'],
    level: 49,
    itemTypes: ['Weapon'],
    properties: ['20% Chance to Cast Level 12 Lower Resist on Striking', '25% Chance to Cast Level 15 Poison Nova on Striking', '+1-2 to Poison and Bone Skills (Necromancer Only)', '+270-340% Enhanced Damage', 'Ignore Target Defense', '+15% to Poison Skill Damage', '+200 Poison Damage over 10 Seconds', '+10 to Vitality']
  },

  {
    name: 'Destruction',
    runes: ['Vex', 'Lo', 'Ber', 'Jah', 'Ko'],
    level: 65,
    itemTypes: ['Polearm', 'Sword'],
    properties: ['23% Chance to Cast Level 12 Volcano on Striking', '5% Chance to Cast Level 23 Molten Boulder on Striking', '100% Chance to Cast Level 45 Meteor When You Die', '15% Chance to Cast Level 22 Nova on Attack', '+350% Enhanced Damage', 'Ignore Target Defense', 'Adds 100-180 Magic Damage', 'Adds 250-300 Fire Damage', '7% Mana Stolen per Hit', '20% Chance of Crushing Blow', '20% Deadly Strike', 'Prevent Monster Heal', '+10 to Dexterity']
  },
  {
    name: 'Authority',
    runes: ['Hel', 'Shael', 'Ral'],
    level: 33,
    itemTypes: ['Armor'],
    properties: ['2% Chance to cast level 10 Psychic Ward when struck', '10% Chance to cast level 15 Miasma Chains on striking', '+2 to Warlock Skill Levels', '+40-60% Enhanced Damage', '+1-15 Magic Absorb']
  },
  {
    name: 'Coven',
    runes: ['Ist', 'Ral', 'Io'],
    level: 51,
    itemTypes: ['Helm'],
    properties: ['5% Chance to cast level 10 Sigil Lethargy when struck', '+1 to All Skills', '+20% Faster Cast Rate', '+30-50% Enhanced Defense', '+1-15 Magic Absorb', '+1-5 Life after each Kill']
  },
  {
    name: 'Vigilance',
    runes: ['Dol', 'Gul'],
    level: 53,
    itemTypes: ['Grimoire', 'Any Shield', 'Voodoo Heads', 'Auric Shields'],
    properties: ['5% Chance to cast level 10 Ring of Fire when struck', '+10% Faster Run/Walk', '+30% Faster Block Rate', '+20-40 to Life', '+20-40 to Mana', 'All Resistances +25-35', '+75-100% Enhanced Defense']
  },
  {
    name: 'Ritual',
    runes: ['Amn', 'Shael', 'Ohm'],
    level: 57,
    itemTypes: ['Knife'],
    properties: ['13% Chance to cast level 1 Sigil Lethargy when struck', '+20% Increased Attack Speed', 'Damage Reduced by 200-270%', '+150-250% Damage to Demons', '100-260% Bonus to Attack Rating', '+3-5 Life after each Kill', 'Slain Monsters Rest in Peace']
  },
  {
    name: 'Void',
    runes: ['Thul', 'Zod', 'Ist'],
    level: 69,
    itemTypes: ['Knife'],
    properties: ['+2 to All Skills', '+40% Faster Cast Rate', '+10-15% to Magic Skill Damage', '+1-3 to Abyss', '+8-12 to all Attributes', 'Level 4 Decrepify (35/35 Charges)']
  }
];
