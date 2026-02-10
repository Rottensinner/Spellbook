import { Spell } from "../domain/spell/spell.types";

export const spells: Spell[] = [
  // --- CANTRIPS (0) ---
  {
    id: "mage-hand",
    name: "Mage Hand",
    level: 0,
    school: "Conjuration",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 1, unit: "Minute" },
    components: { verbal: true, somatic: true },
    description:
      "A spectral, floating hand appears at a point you choose and can manipulate objects at a distance.",
  },
  {
    id: "light",
    name: "Light",
    level: 0,
    school: "Evocation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 1, unit: "Hour" },
    components: {
      verbal: true,
      somatic: false,
      material: { description: "firefly or phosphorescent moss" },
    },
    description:
      "You touch an object and cause it to shed bright light in a small radius for a limited time.",
  },
  {
    id: "ray-of-frost",
    name: "Ray of Frost",
    level: 0,
    school: "Evocation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: { verbal: true, somatic: true },
    spellDamage: { numberOfDice: 1, dice: 8 },
    description:
      "A frigid beam of blue-white light streaks toward a creature, dealing cold damage and slowing it.",
  },

  // --- LEVEL 1 ---
  {
    id: "magic-missile",
    name: "Magic Missile",
    level: 1,
    school: "Evocation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: { verbal: true, somatic: true },
    spellDamage: { numberOfDice: 3, dice: 4, bonus: 3 },
    description:
      "You create glowing darts of magical force that unerringly strike their targets.",
  },
  {
    id: "shield",
    name: "Shield",
    level: 1,
    school: "Abjuration",
    castingTime: { type: "Action", unit: "Reaction" },
    duration: { type: "Timed", value: 1, unit: "Round" },
    components: { verbal: true, somatic: true },
    description:
      "An invisible barrier of magical force appears, protecting you from incoming attacks.",
  },
  {
    id: "detect-magic",
    name: "Detect Magic",
    level: 1,
    school: "Divination",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 10, unit: "Minute" },
    components: { verbal: true, somatic: true },
    description:
      "For the duration, you sense the presence of magic within range and learn its school.",
  },

  // --- LEVEL 2 ---
  {
    id: "invisibility",
    name: "Invisibility",
    level: 2,
    school: "Illusion",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 1, unit: "Hour" },
    components: {
      verbal: true,
      somatic: true,
      material: { description: "eyelash in gum arabic" },
    },
    description:
      "A creature you touch becomes invisible until the spell ends or it takes an aggressive action.",
  },
  {
    id: "mirror-image",
    name: "Mirror Image",
    level: 2,
    school: "Illusion",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 1, unit: "Minute" },
    components: { somatic: true, verbal: false },
    description:
      "Illusory duplicates of yourself appear, confusing enemies and deflecting attacks.",
  },

  // --- LEVEL 3 ---
  {
    id: "fireball",
    name: "Fireball",
    level: 3,
    school: "Evocation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: {
      verbal: true,
      somatic: true,
      material: { description: "bat guano and sulfur" },
    },
    spellDamage: { numberOfDice: 8, dice: 6 },
    description:
      "A bright streak flashes from your pointing finger and erupts in a fiery explosion.",
  },
  {
    id: "fly",
    name: "Fly",
    level: 3,
    school: "Transmutation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 10, unit: "Minute" },
    components: {
      verbal: true,
      somatic: true,
      material: { description: "wing feather" },
    },
    description:
      "You grant a creature the ability to fly, allowing swift movement through the air.",
  },

  // --- LEVEL 4 ---
  {
    id: "blight",
    name: "Blight",
    level: 4,
    school: "Necromancy",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: { verbal: true, somatic: true },
    spellDamage: { numberOfDice: 8, dice: 8 },
    description:
      "Necromantic energy withers plant creatures or drains moisture from living beings.",
  },
  {
    id: "greater-invisibility",
    name: "Greater Invisibility",
    level: 4,
    school: "Illusion",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 1, unit: "Minute" },
    components: { verbal: true, somatic: true },
    description:
      "You or a creature you touch becomes invisible even while attacking or casting spells.",
  },

  // --- LEVEL 5 ---
  {
    id: "cone-of-cold",
    name: "Cone of Cold",
    level: 5,
    school: "Evocation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: {
      verbal: true,
      somatic: true,
      material: { description: "small crystal" },
    },
    spellDamage: { numberOfDice: 8, dice: 8 },
    description:
      "A blast of freezing air erupts from your hands, dealing massive cold damage.",
  },
  {
    id: "telekinesis",
    name: "Telekinesis",
    level: 5,
    school: "Transmutation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Timed", value: 10, unit: "Minute" },
    components: { verbal: true, somatic: true },
    description:
      "You gain the ability to move or restrain creatures and objects with your mind.",
  },

  // --- LEVEL 6 ---
  {
    id: "disintegrate",
    name: "Disintegrate",
    level: 6,
    school: "Transmutation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: {
      verbal: true,
      somatic: true,
      material: { description: "lodestone and dust" },
    },
    spellDamage: { numberOfDice: 10, dice: 6, bonus: 40 },
    description:
      "A thin green ray reduces creatures or objects to dust upon a failed saving throw.",
  },

  // --- LEVEL 7 ---
  {
    id: "finger-of-death",
    name: "Finger of Death",
    level: 7,
    school: "Necromancy",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: { verbal: true, somatic: true },
    spellDamage: { numberOfDice: 7, dice: 8, bonus: 30 },
    description:
      "You unleash negative energy that sears a creature and may raise it as undead.",
  },

  // --- LEVEL 8 ---
  {
    id: "power-word-stun",
    name: "Power Word Stun",
    level: 8,
    school: "Enchantment",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Special", description: "Until target succeeds a save" },
    components: { verbal: true, somatic: false },
    description:
      "A word of power overwhelms a creature’s mind, leaving it stunned.",
  },

  // --- LEVEL 9 ---
  {
    id: "meteor-swarm",
    name: "Meteor Swarm",
    level: 9,
    school: "Evocation",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Instant" },
    components: { verbal: true, somatic: true },
    spellDamage: { numberOfDice: 20, dice: 6 },
    description:
      "Blazing meteors crash down at points you choose, devastating entire areas.",
  },
  {
    id: "wish",
    name: "Wish",
    level: 9,
    school: "Conjuration",
    castingTime: { type: "Action", unit: "Action" },
    duration: { type: "Special", description: "Varies" },
    components: { verbal: true, somatic: false },
    description:
      "You reshape reality itself, producing effects limited only by the spell’s power.",
  },
];
