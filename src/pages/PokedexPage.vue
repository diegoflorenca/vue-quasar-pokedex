<template>
  <q-page class="flex flex-center">
    <div class="row q-gutter-md">
      <div class="col"><PokemonDetails /></div>
      <div class="col"><PokemonTable :pokemonList="pokemonData.list" /></div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import PokemonDetails from "src/components/PokemonDetails.vue";
import PokemonTable from "src/components/PokemonTable.vue";
import fetchPokemons from "src/utils/pokeDate.js";

const pokemonData = reactive({
  list: [],
});

onMounted(async () => {
  const data = await fetchPokemons();
  pokemonData.list = data;
});
</script>
