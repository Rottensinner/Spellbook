import {
  CastingTime,
  SpellComponents,
  SpellDamage,
  SpellDuration,
} from "./spell.types";

export function formatDamage(damage: SpellDamage): string {
  if (damage) {
    const base = `${damage.numberOfDice} K${damage.dice}`;
    return damage.bonus ? `${base} + ${damage.bonus}` : base;
  } else return;
}
export function formatCastingTime(castingTime: CastingTime): string {
  //   if (castingTime.type === "Action") return `Akcja ${castingTime.unit}`;
  //   if (castingTime.type === "Special") return castingTime.description;
  //   if (castingTime.type === "Timed")
  //     return `${castingTime.value} + ${castingTime.unit}`;
  switch (castingTime.type) {
    case "Action":
      return castingTime.unit;
    case "Special":
      return castingTime.description;
    case "Timed":
      return `${castingTime.value} ${castingTime.unit}`;
  }
}

export function formatSpellDuration(duration: SpellDuration): string {
  switch (duration.type) {
    case "Instant":
      return `Natychmiastowy`;
    case "Special":
      return `${duration.description}`;
    case "Timed":
      return `${duration.value}  ${duration.unit}`;
    case "UntilDispelled":
      return `Do czasu rozproszenia`;
  }
}

export function formatSpellComponent(component: SpellComponents): string {
  let data = ``;

  if (component.verbal) data += "V";
  if (component.somatic) data += ", S ";
  if (component.material) data += `, M (${component.material.description})`;
  // if (!component.material.consumed) return data + `)`;
  return data;
}
