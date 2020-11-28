<template>
  <h1>PokemonDetail</h1>
  <p> {{ fetchPokemon }} </p>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('loadPokemonData');
    },
    computed: {
      fetchPokemon() {
        return this.$store.getters.pokemon;
      }
    }
  }
</script>
