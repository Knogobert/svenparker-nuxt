<template>
  <div :style="{ 'background-color': coloring.base.lighten }">
    <!-- <sp-nav/> -->
    <sp-logo/>
    <nuxt/>
  </div>
</template>

<script>
import spNav from '~/components/Nav.vue'
import spLogo from '~/components/Logo.vue'

export default {
  components: {
    spNav,
    spLogo
  },
  computed: {
    coloring() {
      return {
        base: {
          default: '#2ECC71',
          lighten: '#37d278'
        }
      }
    }
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
