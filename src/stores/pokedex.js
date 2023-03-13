import { defineStore } from "pinia";

export const usePokedexStore = defineStore("pokemon", {
  state: () => ({
    list: [],
    selected: {
      id: null,
      name: "",
    },
  }),
  getters: {
    getPokemonList: (state) => state.list,
    getPokemonById: (state) => {
      return (id) => state.list.find((pokemon) => pokemon.id === id);
    },
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
