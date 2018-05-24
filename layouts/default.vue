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
  name: 'default-layout',
  components: {
    spNav,
    spLogo
  },
  data() {
    return {
      color: {
        hue: 145,
        saturation: 63,
        luminosity: 49,
        alpha: 1
      },
    }
  },
  computed: {
    coloring() {
      return {
        base: {
          default: '#2ECC71',
          lighten: 'hsla('+this.color.hue+', '+this.color.saturation+'%, '+this.color.luminosity+'%, '+this.color.alpha+')'
        }
      }
    }
  },
  methods: {
    bodyColorChange(color) {
      coloring.base.lighten = color;
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
