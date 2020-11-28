<template>

  <the-header></the-header>

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
import TheHeader from './components/layout/TheHeader.vue';
import PokemonItem from './components/pokemon/PokemonItem.vue';
export default {
  components: {
    TheHeader,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}


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
