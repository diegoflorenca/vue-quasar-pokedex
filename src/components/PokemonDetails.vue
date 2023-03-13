<template>
  <q-page class="row q-gutter-md">
    <div>
      <h3>Details</h3>
      <p>
        {{ pokemon }}
      </p>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, watch } from "vue";
import { storeToRefs } from "pinia";
import { usePokedexStore } from "src/stores/pokedex";
import fetchPokemonDetails from "src/utils/pokemonApiDetails";

const pokemonStore = usePokedexStore();
const { selected } = storeToRefs(pokemonStore);

const pokemon = reactive({
  details: [],
});

watch(selected, async (currentSeletedPokemon) => {
  pokemon.id = currentSeletedPokemon.id;
  pokemon.name = currentSeletedPokemon.name;
  pokemon.details = await fetchPokemonDetails(currentSeletedPokemon.id);
});
</script>
