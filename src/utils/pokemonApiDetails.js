import { api } from "src/boot/axios";

const fetchPokemonDetails = async (id) => {
  try {
    const pokeApiData = await api.get(`pokemon-species/${id}/`);

    return pokeApiData.data;
  } catch (error) {
    console.error("Failed to fetch data from the API: ", error);
  }
};

export default fetchPokemonDetails;
