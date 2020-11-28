<template>
  <button v-bind:class="mode">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
.fetch-button {
padding: .8rem 2rem;
margin: 1rem auto;
background-color: #2563EB;
color: white;
border-radius: 50px;
border: 1px solid #2563EB;
font-weight: bold;
display: inline-block;
font-size: .8rem;
}
</style>
