<template>
  <footer class="footer-main"><!--v-bodyZoom:up-->
    <div class="footer-main-container">
      <transition name="page">
        <div class="footer-slider footer-slider--left" v-if="showSliders">
          <input type="range" min="20" max="188" v-model="sliderWeightValue" @change="changeWeight" class="slider">
        </div>
      </transition>

      <h6>That’s it folks!</h6><!--@click="toggleShowSliders()"-->

      <transition name="page">
        <div class="footer-slider footer-slider--right" v-if="showSliders">
          <input type="range" min="300" max="500" v-model="sliderWidthValue" @change="changeWidth" class="slider">
        </div>
      </transition>
      <style v-if="sliderChanged">
        html {
          font-variation-settings: "wght" {{ weight }}, "wdth" {{ width }};
        }
      </style>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showSliders: false,
      sliderChanged: false,
      sliderWeightValue: 110,
      sliderWidthValue: 420,
      weight: 110,
      width: 420
    }
  },
  computed:{
    computedWeight(){
      return this.weight;
    },
    computedWidth(){
      return this.width;
    },
  },
  methods:{
    toggleShowSliders(){
      this.showSliders = !this.showSliders
    },
    changeWeight(){
      // Uncomment to re-enable buggy mess of a variable font slider
      //this.sliderChanged = true
      this.weight = parseInt(this.sliderWeightValue)
    },
    changeWidth(){
      // Uncomment to re-enable buggy mess of a variable font slider
      //this.sliderChanged = true
      this.width = parseInt(this.sliderWidthValue)
    }
  },
  directives: {
    bodyZoom: {
      inViewport (el) {
        var rect = el.getBoundingClientRect()
        return !(rect.bottom < 0 || rect.right < 0 ||
                rect.left > window.innerWidth ||
                rect.top > window.innerHeight)
      },
      bind(el, binding) {
        el.$onScroll = function() {
          let body = document.querySelector('body');
          if (binding.def.inViewport(el)) {
            body.classList.add('js-zoom--'+binding.arg)
          }else{
            body.classList.remove('js-zoom--'+binding.arg)
          }
        }
        document.addEventListener('scroll', el.$onScroll)
      },
      inserted(el, binding) {
        el.$onScroll()
      },
      unbind(el, binding) {
        document.removeEventListener('scroll', el.$onScroll)
        delete el.$onScroll
      }
    }
  }
}
</script>


<style lang="scss">
@import '~assets/_variables.scss';

.footer-main {
  position:relative;
  z-index: 0;

  padding: 2rem;

  display: flex;
  justify-content: center;

  text-align: center;
  user-select: none;

  &-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  h6 {
    display: inline-flex;
    line-height: 1.2;
    height: 21px;
    // font-variation-settings: "wght" 110, "wdth" 420;
    // transition: font-variation-settings .2s ease-in-out;

    // &:active,
    // &:hover,
    // &:focus {
    //   font-variation-settings: "wght" 140, "wdth" 380;
    //   transition: font-variation-settings .2s ease-in-out;
    // }
  }
}

.footer-slider {
  display: inline-flex;
  &--left {
    padding-right: 15px;
  }
  &--right {
    padding-left: 15px;
  }
}

.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  background: $ufo-d2; /* Grey background */
  outline: none; /* Remove outline */
  border-radius: 2px;
  padding: 2px;
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 15px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: $ufo-l2; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 15px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: $ufo-l2; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 50%;
}

</style>
