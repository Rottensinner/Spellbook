export type SpellSchool =
  | "Abjuration"
  | "Conjuration"
  | "Divination"
  | "Enchantment"
  | "Evocation"
  | "Illusion"
  | "Necromancy"
  | "Transmutation";
// UNIE!
export type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ActionUnit = "Action" | "BonusAction" | "Reaction";
export type TimeUnit = "Hour" | "Minute" | "Round" | "Day";
export type SpellComponentsTypes = "Verbal" | "Somatic" | "Material";
// UNIE DYSKRYMINACYJNE!
export type CastingTime =
  | { type: "Action"; unit: ActionUnit }
  | { type: "Timed"; value: number; unit: TimeUnit }
  | { type: "Special"; description: string };

export type SpellDuration =
  | { type: "Instant" }
  | { type: "Timed"; value: number; unit: TimeUnit }
  | { type: "UntilDispelled" }
  | { type: "Special"; description: string };

//Unia literalnych StringóW

// Interfejsy!
export interface MaterialComponent {
  description: string;
  consumed?: string;
}
export interface SpellComponents {
  verbal: boolean;
  somatic: boolean;
  material?: MaterialComponent;
}
export interface SpellDamage {
  numberOfDice: number;
  dice: number;
  bonus?: number;
}

export interface Spell {
  id: string;
  name: string;
  level: SpellLevel;
  school: SpellSchool;
  spellDamage?: SpellDamage;
  range?: string;
  castingTime: CastingTime;
  duration: SpellDuration;
  components: SpellComponents;
  description?: string;
}
