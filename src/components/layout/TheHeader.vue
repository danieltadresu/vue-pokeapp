<template>
  <header>
    <h1>{{headerTitle}}</h1>
    <ul>
      <li>
        POKEMON LIST
      </li>
      <li>
        POKEMON DETAILS
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: ['headerTitle']
}
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  display: inline-block;
}

ul, li {
  display: inline-block;
  list-style-type: none;
  margin: 0 .5rem;
  padding: 0;
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
  }
}



</style>
