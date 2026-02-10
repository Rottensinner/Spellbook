<script setup>
import { spells } from "../database/spell";
import { useRouter } from "vue-router";
const router = useRouter();

const gotoSpell = (spell) => {
  router.push(`/spell/${spell.id}`);
};
</script>

<template v-if="spell">
  <p
    class="listP"
    v-for="spell in spells"
    :key="spell.id"
    @click="gotoSpell(spell)"
  >
    - {{ spell.name }}
  </p>
</template>

<!-- // co chcęmy zrobić? // chcemy przekazać po prostu obiekt spell, i to w sumie
tyle. // a później go wyświetlić w SpellView. -->
<style scoped>
.listP {
  color: blue;
  transition: 200ms;
}
.listP:hover {
  transition: 200ms;
  color: black;
  cursor: pointer;
}
</style>
