import { defineStore } from "pinia";

export const usePokedexStore = defineStore("pokemon", {
  state: () => ({
    list: [],
    selected: {},
  }),
  getters: {
    getPokemonList: (state) => state.list,
    getPokemonById: (state) => {
      return (id) => state.list.find((pokemon) => pokemon.id === id);
    },
    getSelectedPokemon: (state) => state.selected,
  },
  actions: {
    setPokemonList(list) {
      this.list = list;
    },
    setSelectedPokemon(pokemon) {
      this.selected = pokemon;
    },
  },
});
