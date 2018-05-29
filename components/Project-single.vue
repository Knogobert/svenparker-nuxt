<template>

  <div class="project-single project-single--left"><!-- :style="projectStyle" -->
    <a class="project-single-link grid-container flow-down-before-enter" href="#">
      <div class="grid-row">
        <article class="col-6" v-flowIn>
          <h3 class="project-single-title"><slot name="title"></slot></h3>
          <h5 class="project-single-subtitle"><slot name="date"></slot></h5>
          <p class="project-single-description"><slot name="description"></slot></p>
        </article>
        <figure class="col-6">
          <img :src="image">
        </figure>
      </div>
    </a>
  </div>

</template>

<script>
export default {
  name: 'sp-projects-single',
  props: ['image'],
  computed: {
    // projectStyle(){
    //   return {
    //     'background-image': `url(${this.bg})`,
    //   }
    // }
  },
  directives: {
    flowIn: {
      inViewport (el) {
        var rect = el.getBoundingClientRect()
        return !(rect.bottom < 0 || rect.right < 0 || 
                rect.left > window.innerWidth ||
                rect.top > window.innerHeight)
      },
      bind(el, binding) {
        el.classList.add('flow-down-before-enter')
        el.$onScroll = function() {
          if (binding.def.inViewport(el)) {
            el.classList.add('flow-down-enter')
            el.classList.remove('flow-down-before-enter')
            binding.def.unbind(el, binding)        
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

.project-single {
  // background-color: hsla(0, 0%, 0%, .1);
  background-size: cover;

  &--left{
    text-align: left;
  }
  &--right{
    text-align: right;
  }

  &-link {
    min-height: 25rem;//400px
    padding: 3rem;
    display: block;
    transition: .2s ease-in-out background-color;

    &:active, 
    &:hover, 
    &:focus {
      background-color: hsla(0, 0%, 0%, .1);
      transition: .2s ease-in-out background-color;
      // .project-single-title {
      //   opacity: 1;
      //   transition: .2s ease-in-out opacity;
      // }
    }
  }

  h3,h4,h5,p {
    color: $white;
  }
  &-title {
    font-size: 3rem;
    margin-bottom: .75rem;
    // opacity: 0;
    // transition: .2s ease-in-out opacity;
  }
  &-subtitle {
    margin-bottom: .5rem;
  }
  &-description {
    max-width: 500px;
  }

}

</style>
