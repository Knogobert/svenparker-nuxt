<template>
  <div>
    <!-- <style>body{--theme-color: {{ themeColor ? themeColor.color : color.primary.default }};}</style> -->

    <sp-logo @bodyColorChange="bodyColorChanged"/>

    <div
      :style="{ 'background-color': color.primary.default }"
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
        primary: {
          darken3: 'hsla(145, 63%, 36%, 1)',
          darken2: 'hsla(145, 63%, 40%, 1)',
          darken1: 'hsla(145, 63%, 44%, 1)',
          default: 'hsla(145, 63%, 49%, 1)',
          lighten1: 'hsla(145, 63%, 52%, 1)',
          lighten2: 'hsla(145, 63%, 56%, 1)'
        }
      },
      themeColor: JSON.parse(localStorage.getItem('themeColor'))
    }
  },
  watch: {
    themeColor(val) {
      this.document.body.style.setProperty('--theme-color', val)
    }
  },
  mounted() {
    if (localStorage.getItem('themeColor')) {
      let themeColor = JSON.parse(localStorage.getItem('themeColor'))
      console.log('themeColor', themeColor)
      setTimeout(() => {
        //this.$bus.$emit('colorChange', themeColor)
        //console.log('Emitted COOKIEZ!')
      }, 2000)
    }
  },
  methods: {
    // saveToLocalStorage(name, data) {
    //   localStorage.setItem(name, JSON.stringify(data));
    //   console.log('SAVED to LS');
    // },
    colorStringify(defColor, hue, luminosity) {
      return (
        'hsla(' +
        hue +
        ', ' +
        defColor.saturation +
        '%, ' +
        (defColor.luminosity + luminosity) +
        '%, ' +
        defColor.alpha +
        ')'
      )
    },
    bodyColorChanged(hue, wasReleased = false) {
      // Tried to loop through but cant find a way without using eval()
      // let colorObj = this.color;
      // Object.keys(colorObj).forEach( (base) => {
      //   console.log(`Current base: ${base}`);
      //   Object.keys(colorObj[base]).forEach(clr => {
      //     console.log(clr);
      //   });
      // });

      this.color.primary.darken3 = this.colorStringify(
        this.defaultColor.primary,
        hue,
        -13
      )
      this.color.primary.darken2 = this.colorStringify(
        this.defaultColor.primary,
        hue,
        -9
      )
      this.color.primary.darken1 = this.colorStringify(
        this.defaultColor.primary,
        hue,
        -5
      )
      this.color.primary.default = this.colorStringify(
        this.defaultColor.primary,
        hue,
        0
      )
      this.color.primary.lighten1 = this.colorStringify(
        this.defaultColor.primary,
        hue,
        +3
      )
      this.color.primary.lighten2 = this.colorStringify(
        this.defaultColor.primary,
        hue,
        +7
      )

      this.$bus.$emit('colorChange', this.color)

      // if (wasReleased) {
      //   this.saveToLocalStorage('themeColor', this.color);
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
