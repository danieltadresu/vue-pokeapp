<template>
  <li>
    <base-card>

      <header>
        <h2>{{ pokemonTitle }}</h2>
      </header>

      <section>
        <img v-bind:src="pokemonImage">
      </section>

      <footer>
        <h3>Abilities</h3>
        <nav>
          <ul>
            <li v-for="(ability, index) in pokemonAbilities" v-bind:key="index">
              <h3>{{ ability.toUpperCase() }}</h3>
            </li>
          </ul>
        </nav>
      </footer>

    </base-card>
  </li>
</template>

<script>
  export default {
    props: ['pokemonId', 'pokemonName', 'pokemonImage', 'pokemonAbilities'],
    computed: {
      pokemonTitle() {
        return this.pokemonId + ' ' + this.pokemonName.toUpperCase();
      }
    }
  }
</script>

<style scoped>
  p, h1 {
    margin: 0;
    padding: 0;
  }

  header, section, footer {
    margin: 2rem 0;
    text-align: center;
  }

  nav {
    border: 1px solid black;
    display: inline-block;
    padding: 0 4rem;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }



</style>
