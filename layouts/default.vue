<template>
  <div>
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-flow: column;
}

</style>
