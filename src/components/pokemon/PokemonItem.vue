<template>
  <li>
    <h3>{{ pokemonId }}</h3>
    <p>{{ pokemonName }}</p>
    <p>{{ pokemonImage }}</p>
    <p>{{ pokemonAbilities }}</p>
  </li>
</template>

<script>
  export default {
    props: ['pokemonId', 'pokemonName', 'pokemonImage', 'pokemonAbilities']
  }
</script>
