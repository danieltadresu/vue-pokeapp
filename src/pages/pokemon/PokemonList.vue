<template>
  <button v-on:click="showData">Click me!</button>

  <ul v-if="isVisible">

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
  data() {
    return {
      isVisible: false
    }
  },
  computed: {
    fetchPokemon() {
      return this.$store.getters.pokemon;
    }
  },
  methods: {
    showData() {
      this.$store.dispatch('loadPokemonData');
      this.isVisible = !this.isVisible;
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
</style>
