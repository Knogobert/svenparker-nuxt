<template>
  <nav class="nav-main">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link>
  </nav>
</template>

<style lang="scss">
.nav-main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  padding: 1rem;

  display: flex;
  justify-content: center;

  text-align: center;
  background-color: #229652;

  a {
    margin: 0 1rem;
  }
}
</style>
