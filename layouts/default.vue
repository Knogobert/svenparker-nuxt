<template>
  <div>
    <style>body{background-color: {{ themeColor }};}</style>
    <sp-logo @bodyColorChange="bodyColorChanged"/>

    <div
      :style="{ 'background-color': themeColor }"
      class="o-wrapper">
      <!-- <sp-nav/> -->
      <nuxt/>
    </div>

    <sp-footer/>

  </div>
</template>

<script>
import spNav from '~/components/Nav.vue'
import spLogo from '~/components/Logo.vue'
import spFooter from '~/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    spNav,
    spLogo,
    spFooter
  },
  data() {
    return {
      themeColor: '',
      defaultColor: {
        hue: 349,
        saturation: 63,
        luminosity: 49,
        alpha: 1
      } // Default set color
    }
  },
  watch: {
    themeColor() {
      document.body.style.backgroundColor = this.themeColor
      return this.themeColor
    }
  },
  mounted() {
    if (localStorage.themeColor) {
      this.themeColor = JSON.parse(localStorage.themeColor).color
    } else {
      this.themeColor = this.stringifyColor(this.defaultColor.hue)
    }

    document.body.style.backgroundColor = this.themeColor
  },
  methods: {
    bodyColorChanged(hue) {
      this.themeColor = this.stringifyColor(hue)
      this.$bus.$emit('colorChange', this.themeColor)
    },
    stringifyColor(hue) {
      return (
        'hsla(' +
        hue +
        ', ' +
        this.defaultColor.saturation +
        '%, ' +
        this.defaultColor.luminosity +
        '%, ' +
        this.defaultColor.alpha +
        ')'
      )
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
  //text-align: center;
  flex-flow: column;
}
</style>
