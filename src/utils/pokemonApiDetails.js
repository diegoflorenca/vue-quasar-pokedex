import { api } from "src/boot/axios";

const fetchPokemonDetails = async (id) => {
  try {
    const pokeApiData = await api.get(`pokemon-species/${id}/`);

    const pokemon = pokeApiData.data;

    const eggGroups = pokemon.egg_groups.map((egg) => egg.name);

    const genera = pokemon.genera.filter((genera) => {
      return genera.language.name === "en";
    })[0];

    const texts = pokemon.flavor_text_entries.filter((text) => {
      return text.language.name == "en";
    });

    const formattedTexts = texts.map((text) => {
      /*
      Page breaks are treated just like newlines.
      Soft hyphens followed by newlines vanish.
      Letter-hyphen-newline becomes letter-hyphen, to preserve real hyphenation. Any other newline becomes a space.
      source: https://github.com/andreferreiradlw/pokestats/issues/41
      */
      return text.flavor_text
        .replace("\f", "\n")
        .replace("\u00ad\n", "")
        .replace("\u00ad", "")
        .replace(" -\n", " - ")
        .replace("-\n", "-")
        .replace("\n", " ");
    });

    const uniq = [...new Set(formattedTexts)];

    const name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

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
      text: uniq,
      genera: genera.genus,
      generation: pokemon.generation.name,
      growthRate: pokemon.growth_rate.name,
      habitat: pokemon.habitat.name,
      hasGenderDifferences: pokemon.has_gender_differences,
      hatchCounter: pokemon.hatch_counter,
      isBaby: pokemon.is_baby,
      isLegendary: pokemon.is_legendary,
      isMythical: pokemon.is_mythical,
      name: name,
      order: pokemon.order,
      areas: areas,
    };

    return formattedApiData;
  } catch (error) {
    console.error("Failed to fetch data from the API: ", error);
  }
};

export default fetchPokemonDetails;
