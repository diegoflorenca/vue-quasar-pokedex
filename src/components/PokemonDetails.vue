<template>
  <q-page class="row">
    <div class="q-pa-xl">
      <span class="text-grey">#{{ p.details.order }}</span>
      <div class="text-h4">{{ p.details.name }}</div>
      <q-badge v-if="p.details.isBaby" color="blue" class="q-pa-xs">
        <q-icon name="child_friendly" class="q-pr-sm" /> Baby
      </q-badge>
      <q-badge v-if="p.details.isLegendary" color="orange" class="q-pa-xs">
        <q-icon name="star" class="q-pr-sm" /> Legendary
      </q-badge>
      <q-badge v-if="p.details.isMythical" color="purple" class="q-pa-xs">
        <q-icon name="auto_awesome" class="q-pr-sm" /> Mythical
      </q-badge>

      <div class="q-py-sm">{{ p.details.text }}</div>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label overline>Base Happiness</q-item-label>
            <q-item-label>{{ p.details.baseHappiness }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Capture Rate</q-item-label>
            <q-item-label>{{ p.details.captureRate }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Color</q-item-label>
            <q-item-label>{{ p.details.color }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Egg Groups</q-item-label>
            <q-item-label v-for="group in p.details.eggGroups" :key="group">
              {{ group }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label overline>Genera</q-item-label>
            <q-item-label>{{ p.details.genera }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Generation</q-item-label>
            <q-item-label>{{ p.details.generation }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Growth Rate</q-item-label>
            <q-item-label>{{ p.details.growthRate }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>Habitat</q-item-label>
            <q-item-label>
              {{ p.details.habitat }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label overline>Has Gender Difference</q-item-label>
            <q-item-label>{{ hasGenderDifferences }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label overline>
              How long it takes to hatch an egg?
            </q-item-label>
            <q-item-label>{{ p.details.hatchCounter }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="text-h6">Areas</div>
      <q-list>
        <q-item>
          <q-item-section v-for="area in p.details.areas" :key="area">
            <q-item-label overline>{{ area.name }}</q-item-label>
            <q-item-label>Base Score: {{ area.baseScore }}</q-item-label>
            <q-item-label>Rate: {{ area.rate }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { watch, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { usePokedexStore } from "src/stores/pokedex";

const pokemonStore = usePokedexStore();
const { selected } = storeToRefs(pokemonStore);
const p = reactive({
  details: {},
});
const hasGenderDifferences = computed(() =>
  p.details.hasGenderDifferences ? "Yes" : "No"
);

watch(selected, async (currentSeletedPokemon) => {
  await pokemonStore.fetchPokemonDetails(currentSeletedPokemon.id);
  p.details = pokemonStore.details;
});
</script>
