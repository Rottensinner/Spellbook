import {
  ActionUnit,
  SpellComponentsTypes,
  SpellLevel,
  SpellSchool,
  TimeUnit,
} from "./spell.types";

export const ACTION_UNIT = {
  Action: "Akcja",
  BonusAction: "Akcja dodatkowa",
  Reaction: "Reakcja",
} as const satisfies Record<ActionUnit, string>;

export const TIME_UNIT_LABELS_PL = {
  Round: "runda",
  Minute: "minuta",
  Hour: "godzina",
  Day: "dzień",
} as const satisfies Record<TimeUnit, string>;
export const SPELL_COMPONENTS_LABELS_PL = {
  Verbal: "werbalny",
  Somatic: "somatyczny",
  Material: "materialny",
} as const satisfies Record<SpellComponentsTypes, string>;

export const SPELL_DURATION_LABELS_PL = {
  Instant: "natychmiastowy",
  Timed: "czas trwania",
  UntilDispelled: "do czasu rozproszenia",
  Special: "specjalny",
} as const;

export const SPELL_LEVEL_LABELS_PL = {
  0: "Sztuczka",
  1: "1. poziom",
  2: "2. poziom",
  3: "3. poziom",
  4: "4. poziom",
  5: "5. poziom",
  6: "6. poziom",
  7: "7. poziom",
  8: "8. poziom",
  9: "9. poziom",
} as const satisfies Record<SpellLevel, string>;

export const SPELL_SCHOOLS_LABELS_PL = {
  Abjuration: "Odpychanie",
  Conjuration: "Przywołanie",
  Divination: "Wieszczenie",
  Enchantment: "Uroki",
  Evocation: "Ewokacja",
  Illusion: "Iluzja",
  Necromancy: "Nekromancja",
  Transmutation: "Transmutacja",
} as const satisfies Record<SpellSchool, string>;
