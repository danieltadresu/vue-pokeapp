<template>
  <h1>PokemonDetail</h1>
  <p> {{ fetchPokemon }} </p>
</template>

<script>
  export default {
    data() {
      return {
        selectedPokemon: null
      }
    },
    created() {
      this.$store.dispatch('loadPokemonData');
    },
    mounted() {
      const pokemonId = this.$route.params.pokemonId;
      this.selectedPokemon = this.$store.getters.pokemon.find(
        pokemon => pokemon.id = pokemonId
      );
      console.log(this.selectedPokemon)
    },
    computed: {
      fetchPokemon() {
        return this.$store.getters.pokemon;
      }
    }
  }
</script>
