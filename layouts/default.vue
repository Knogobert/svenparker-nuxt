<template>
  <div :style="{ 'background-color': color.base.default }">
    <style>body{background-color: {{ color.base.default }};}</style>
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
      defaultColor: {
        hue: 145,
        saturation: 63,
        luminosity: 49,
        alpha: 1
      },
      color: {
        base: {
          darken: 'hsla(145, 63%, 44%, 1)',
          default: 'hsla(145, 63%, 49%, 1)',
          lighten: 'hsla(145, 63%, 52%, 1)'
        }
      }
    }
  },
  methods: {
    bodyColorChanged(hue) {
      this.color.base.default = 'hsla('+hue+', '+this.defaultColor.saturation+'%, '+this.defaultColor.luminosity+'%, '+this.defaultColor.alpha+')';
      this.color.base.darken = 'hsla('+hue+', '+this.defaultColor.saturation+'%, '+(this.defaultColor.luminosity - 5)+'%, '+this.defaultColor.alpha+')';
      this.$emit('colorChange', this.color);
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
