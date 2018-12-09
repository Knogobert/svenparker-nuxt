<template>
  <div>
    <style>body{background-color: {{ themeColor ? themeColor.color : color.primary }};}</style>

    <sp-logo @bodyColorChange="bodyColorChanged"/>

    <div
      :style="{ 'background-color': color.primary }"
      class="o-wrapper">
      <!-- <sp-nav/> -->
      {{ themeColor }}
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
      defaultColor: {
        primary: {
          hue: 145,
          saturation: 63,
          luminosity: 49,
          alpha: 1
        }
      },
      color: {
        primary: 'hsla(145, 63%, 49%, 1)'
      }
    }
  },
  computed: {
    themeColor() {
      return JSON.parse(localStorage.getItem('themeColor'))
    }
  },
  // watch: {
  //   themeColor(val) {
  //     this.$el.style.setProperty('--theme-color', val.color)
  //   }
  // },
  mounted() {
    if (localStorage.getItem('themeColor')) {
      let themeColor = JSON.parse(localStorage.getItem('themeColor'))
      console.log('themeColor', themeColor)
      setTimeout(() => {
        this.$bus.$emit('colorChange', themeColor)
        console.log('Emitted COOKIEZ!')
      }, 2000)
      this.themeColor = themeColor
    }
  },
  methods: {
    // saveToLocalStorage(name, data) {
    //   localStorage.setItem(name, JSON.stringify(data))
    //   console.log(`SAVED ${name} to LS`)
    // },
    bodyColorChanged(hue, wasSelected = false) {
      this.color.primary =
        'hsla(' +
        hue +
        ', ' +
        this.defaultColor.primary.saturation +
        '%, ' +
        this.defaultColor.primary.luminosity +
        '%, ' +
        this.defaultColor.primary.alpha +
        ')'

      this.$bus.$emit('colorChange', this.color)

      // if (wasSelected) {
      //   this.saveToLocalStorage('themeColor', this.color)
      // }
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

// Usable random color choices
// hsla(223, 63%, 49%, 1)
// hsla(329, 63%, 49%, 1)
// hsla(25, 63%, 49%, 1)
// hsla(56, 63%, 49%, 1)
// hsla(145, 63%, 49%, 1)
// hsla(158, 63%, 49%, 1)
// hsla(180, 63%, 49%, 1)
</style>
