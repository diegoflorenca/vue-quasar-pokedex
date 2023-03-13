<template>
  <q-page class="row q-gutter-md">
    <div class="col"><PokemonDetails /></div>
    <div class="col"><PokemonTable /></div>
  </q-page>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { usePokedexStore } from "src/stores/pokedex";
import fetchPokemons from "src/utils/pokedexApiData.js";
import PokemonDetails from "src/components/PokemonDetails.vue";
import PokemonTable from "src/components/PokemonTable.vue";

const pokemonStore = usePokedexStore();

onMounted(async () => {
  const data = await fetchPokemons();
  pokemonData.list = data;
  pokemonStore.setPokemonList(data);
});

const pokemonData = reactive({
  list: pokemonStore.getPokemonList,
});
</script>
