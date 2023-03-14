import { defineStore } from "pinia";
import fetchPokeApi from "src/utils/pokedexApiData.js";
import fetchPokemonDetails from "src/utils/pokemonApiDetails";

export const usePokedexStore = defineStore("pokemon", {
  state: () => ({
    list: [],
    selected: {},
    details: [],
  }),
  getters: {
    getPokemonList: (state) => state.list,
    getPokemonById: (state) => {
      return (id) => state.list.find((pokemon) => pokemon.id === id);
    },
    getSelectedPokemon: (state) => state.selected,
  },
  actions: {
    async fetchPokemonList() {
      const apiData = await fetchPokeApi();
      this.list = apiData;
    },
    async fetchPokemonDetails(pokemonId) {
      const apiData = await fetchPokemonDetails(pokemonId);
      this.details = apiData;
    },
    setSelectedPokemon(pokemon) {
      this.selected = pokemon;
    },
  },
});
