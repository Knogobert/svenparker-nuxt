<template>
  <div :style="{ 'background-color': color.base.default }">
    <!-- <sp-nav/> -->
    <sp-logo @bodyColorChange="bodyColorChanged"/>
    <nuxt/>
  </div>
</template>

<script>
import spNav from '~/components/Nav.vue'
import spLogo from '~/components/Logo.vue'

export default {
  name: 'default-layout',
  components: {
    spNav,
    spLogo
  },
  data() {
    return {
      color: {
        base: {
          default: '#2ECC71',
          lighten: 'hsla(145, 63%, 49%, 1)'
        }
      }
    }
  },
  methods: {
    bodyColorChanged(color) {
      this.color.base.default = color;
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
