import { api } from "src/boot/axios";
import PokemonDetailsVue from "src/components/PokemonDetails.vue";

const fetchPokemonDetails = async (id) => {
  try {
    const pokeApiData = await api.get(`pokemon-species/${id}/`);

    const pokemon = pokeApiData.data;

    const eggGroups = pokemon.egg_groups.map((egg) => egg.name);

    const genera = pokemon.genera.filter((genera) => {
      return genera.language.name === "en";
    })[0];

    const areas = pokemon.pal_park_encounters.map((park) => {
      return {
        name: park.area.name,
        baseScore: park.base_score,
        rate: park.rate,
      };
    });

    const formattedApiData = {
      baseHappiness: pokemon.base_happiness,
      captureRate: pokemon.capture_rate,
      color: pokemon.color.name,
      eggGroups: eggGroups,
      text: pokemon.flavor_text_entries[0].flavor_text,
      genera: genera.genus,
      generation: pokemon.generation.name,
      growthRate: pokemon.growth_rate.name,
      habitat: pokemon.habitat.name,
      hasGenderDifferences: pokemon.has_gender_differences,
      hatchCounter: pokemon.hatch_counter,
      isBaby: pokemon.is_baby,
      isLegendary: pokemon.is_legendary,
      isMythical: pokemon.is_mythical,
      name: pokemon.name,
      order: pokemon.order,
      areas: areas,
    };

    return formattedApiData;
  } catch (error) {
    console.error("Failed to fetch data from the API: ", error);
  }
};

export default fetchPokemonDetails;
