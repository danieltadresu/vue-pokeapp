<template>
  <li>
    <base-card>
      <h2>{{ pokemonTitle }}</h2>

      <p>{{ pokemonImage }}</p>
      <p>{{ pokemonAbilities }}</p>
    </base-card>
  </li>
</template>

<script>
  export default {
    props: ['pokemonId', 'pokemonName', 'pokemonImage', 'pokemonAbilities'],
    computed: {
      pokemonTitle() {
        return this.pokemonName.toUpperCase();
      }
    }
  }
</script>

<style scoped>
  p, h1 {
    margin: 0;
    padding: 0;
  }
</style>
