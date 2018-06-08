<template>
  <footer class="footer-main" v-addClass.bodyZoom>
    <h6>That’s it folks!</h6>
  </footer>
</template>

<script>
export default {
  directives: {
    addClass: {
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
            body.classList.add('js-zoom')
          }else{
            body.classList.remove('js-zoom')
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
  padding: 1rem;

  display: flex;
  justify-content: center;

  text-align: center;
  user-select: none;
}

</style>
