<template>
  <nav class="nav-main">
    <!-- <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link> -->
    <a href.prevent="#" v-bodyZoom:left>Contact</a>
  </nav>
</template>

<script>
export default {
  directives: {
    bodyZoom: {
      bind(el, binding) {
        el.$onClick = function() {
          document.querySelector('body').classList.toggle('js-zoom--'+binding.arg)
        }
        document.addEventListener('click', el.$onClick)
      },
      unbind(el, binding) {    
        document.removeEventListener('click', el.$onClick)
        delete el.$onClick
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.nav-main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  padding: 1rem;
  z-index: 101;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  //background-color: #229652;

  a {
    margin: 0 1rem;
  }
}

</style>
