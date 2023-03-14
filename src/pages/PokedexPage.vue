<template>
  <q-page class="row q-gutter-md">
    <div class="col"><PokemonDetails /></div>
    <div class="col"><PokemonTable /></div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { usePokedexStore } from "src/stores/pokedex";
import PokemonDetails from "src/components/PokemonDetails.vue";
import PokemonTable from "src/components/PokemonTable.vue";

const pokemonStore = usePokedexStore();

onMounted(() => {
  pokemonStore.fetchPokemonList();
});
</script>
