<template>
  <q-page class="flex flex-center">
    <div class="row q-gutter-md">
      <div class="col"><PokemonDetails /></div>
      <div class="col"><PokemonTable /></div>
    </div>
  </q-page>
</template>

<script setup>
import PokemonDetails from "src/components/PokemonDetails.vue";
import PokemonTable from "src/components/PokemonTable.vue";
</script>
