<template>
  <ul >
    <pokemon-item
      v-for="pokemon in fetchPokemon"
      v-bind:key="pokemon.id"
      v-bind:pokemon-id="pokemon.id"
      v-bind:pokemon-name="pokemon.name"
      v-bind:pokemon-image="pokemon.imgUrl"
      v-bind:pokemon-abilities="pokemon.abilities">
    </pokemon-item>
  </ul>
</template>

<script>
import PokemonItem from '../../components/pokemon/PokemonItem.vue';
export default {
  components: {
    PokemonItem
  },
  mounted() {
    this.$store.dispatch('loadPokemonData');
  },
  computed: {
    fetchPokemon() {
      return this.$store.getters.pokemon;
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li { }

div {
  text-align: center;
}
</style>
