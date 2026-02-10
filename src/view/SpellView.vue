<template>
  <div class="spell-wrapper">
    <h1 class="spell-name">
      {{ spell.name }}
    </h1>
    <p><b>Poziom zaklęcia:</b> {{ spell.level }}</p>
    <p>Szkoła magii: {{ spell.school }}</p>
    <p>Opis zaklęcia: {{ spell.description }}</p>
    <p v-if="spellCastingTime">
      Czas rzucania zaklęcia: {{ spellCastingTime }}
    </p>
    <p>Komponenty potrzebne do zaklęcia {{ spellComponent }}</p>
    <p>Czas trwania zaklęcia: {{ spellDurationTime }}</p>

    <h2 v-if="SpellDamage">Obrażenia: {{ SpellDamage }}</h2>
  </div>
</template>
<script setup>
import { spells } from "../database/spell";
import {
  formatCastingTime,
  formatDamage,
  formatSpellComponent,
  formatSpellDuration,
} from "../domain/spell/spell.formatters";
import { useRoute } from "vue-router";
const props = defineProps({
  id: String,
});
const route = useRoute();

const spell = spells.find((spell) => spell.id === props.id);
const SpellDamage = formatDamage(spell.spellDamage);
const spellCastingTime = formatCastingTime(spell.castingTime);
const spellComponent = formatSpellComponent(spell.components);
const spellDurationTime = formatSpellDuration(spell.duration);
</script>
<style>
* {
  font-family: "MedievalSharp", cursive;
  font-weight: 500;
  font-style: normal;
}
body {
  margin: 0;
  padding: 40px 0;
  background: #0e0c0a;
}

/* kartka */
.spell-wrapper {
  width: min(900px, 92vw);
  margin: auto;
  padding: 80px 90px;

  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  color: #2b1a0f;
  line-height: 1.6;
}

/* nagłówek */
.spell-name {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
}

/* tekst */
p {
  font-size: 30px;
  margin: 10px 0;
}

/* sekcja obrażeń */
h2 {
  font-size: 38px;

  margin-top: 35px;
  border-top: 2px solid rgba(60, 40, 20, 0.4);
  padding-top: 15px;
}
</style>
