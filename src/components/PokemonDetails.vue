<template>
  <q-page class="row q-gutter-md">
    <div>
      <h3>Details</h3>
      <p>
        {{ pokemonStore.details }}
      </p>
    </div>
  </q-page>
</template>

<script setup>
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { usePokedexStore } from "src/stores/pokedex";

const pokemonStore = usePokedexStore();
const { selected } = storeToRefs(pokemonStore);

watch(selected, async (currentSeletedPokemon) => {
  pokemonStore.fetchPokemonDetails(currentSeletedPokemon.id);
});
</script>
