<template>
  <header>
    <h1>{{headerTitle}}</h1>
    <ul>
      <li>
        <router-link to="/pokemon">
          POKEMON LIST
        </router-link>
      </li>
      <li>
        POKEMON DETAIL
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


a:active,
a:hover,
a.router-link-active {
  color: white;
  font-weight:bold;
  background-color: #10B981;
  border-radius: 12px;
  padding: .5rem 1rem;
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
  }
}



</style>
