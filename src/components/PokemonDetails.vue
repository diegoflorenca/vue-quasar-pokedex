<template>
  <q-page class="row">
    <div class="q-px-lg">
      <h3>Details</h3>
      <p>{{ p.details.baseHappiness }}</p>
      <p>{{ p.details.captureRate }}</p>
      <p>{{ p.details.color }}</p>
      <p>{{ p.details.eggGroups }}</p>
      <p>{{ p.details.text }}</p>
      <p>{{ p.details.genera }}</p>
      <p>{{ p.details.generation }}</p>
      <p>{{ p.details.growthRate }}</p>
      <p>{{ p.details.habitat }}</p>
      <p>{{ p.details.hasGenderDifferences }}</p>
      <p>{{ p.details.hatchCounter }}</p>
      <p>{{ p.details.isBaby }}</p>
      <p>{{ p.details.isLegendary }}</p>
      <p>{{ p.details.isMythical }}</p>
      <p>{{ p.details.name }}</p>
      <p>{{ p.details.order }}</p>
      <p>{{ p.details.areas }}</p>
    </div>
  </q-page>
</template>

<script setup>
import { watch, reactive } from "vue";
import { storeToRefs } from "pinia";
import { usePokedexStore } from "src/stores/pokedex";

const pokemonStore = usePokedexStore();
const { selected } = storeToRefs(pokemonStore);
const p = reactive({
  details: {},
});

watch(selected, async (currentSeletedPokemon) => {
  await pokemonStore.fetchPokemonDetails(currentSeletedPokemon.id);
  p.details = pokemonStore.details;
});
</script>
