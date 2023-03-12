import { api } from "src/boot/axios";

const fetchPokemons = async () => {
  try {
    const pokeApiData = await api.get("/pokedex/2/");
    const pokeData = pokeApiData.data.pokemon_entries.map((pokemon) => {
      const pokemonName =
        pokemon.pokemon_species.name[0].toUpperCase() +
        pokemon.pokemon_species.name.substring(1);
      return {
        id: pokemon.entry_number,
        name: pokemonName,
      };
    });
    return pokeData;
  } catch (error) {
    console.error("Failed to fetch data from the API: ", error);
  }
};

export default fetchPokemons;
