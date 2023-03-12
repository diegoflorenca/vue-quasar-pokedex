<template>
  <div class="q-pa-md">
    <q-table
      title="Kanto Pokemons"
      :rows="pokemonList"
      :columns="columns"
      row-key="name"
      selection="single"
      v-model:selected="selected"
      :filter="filter"
      grid
      hide-header
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
          @click="selectPokemon(props.row.id)"
        >
          <q-card :class="props.selected ? 'bg-grey-2' : ''">
            <img
              :src="
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                props.row.id +
                '.png'
              "
            />

            <q-card-section>
              <div class="text-h6">{{ props.row.name }}</div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  pokemonList: {
    type: Array,
    required: true,
  },
});

const filter = ref("");
const selected = ref([]);

const selectPokemon = (id) => {
  const filterSelectedPokemon = props.pokemonList.filter(
    (pokemon) => pokemon.id === id
  );
  selected.value = filterSelectedPokemon;
};

const columns = [
  {
    name: "id",
    required: true,
    label: "Number",
    align: "left",
    field: "id",
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "name",
    align: "center",
    label: "Name",
    field: "name",
    sortable: true,
  },
];
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
