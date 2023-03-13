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
import { watch, reactive } from "vue";
import { storeToRefs } from "pinia";
import { usePokedexStore } from "src/stores/pokedex";
const pokemonStore = usePokedexStore();
const { selected } = storeToRefs(pokemonStore);

const pokemon = reactive({});

watch(selected, (currentSeletedPokemon) => {
  pokemon.id = currentSeletedPokemon.id;
  pokemon.name = currentSeletedPokemon.name;
});
</script>
