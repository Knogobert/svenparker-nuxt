<template>

  <div class="project-single" :class="{'project-single--left': index % 2 === 0, 'project-single--right': index % 2 !== 0 }"><!-- :style="projectStyle" -->
    <a class="project-single-link grid-container flow-down-before-enter" href="#">
      <div class="grid-row">
        <article class="project-single-article col-6 mb-sm-2" v-flow:down>
          <h3 class="project-single-title"><slot name="title"></slot></h3>
          <h5 class="project-single-subtitle"><slot name="date"></slot></h5>
          <p class="project-single-description"><slot name="description"></slot></p>
        </article>
        <figure class="project-single-figure col-6 filter" :style="{ 'color': color.primary.lighten1 }" v-flow:up.inView><!-- v-inView -->
          <!-- <style>.filter::before{background-color: {{ color.primary.lighten2 }};}</style> -->
          <img :src="image">
        </figure>
      </div>
    </a>
  </div>

</template>

<script>
export default {
  name: 'sp-projects-single',
  props: ['index','image'],
  data() {
    return {
      color: {
        primary: {
          darken3: 'hsla(145, 63%, 36%, 1)',
          darken2: 'hsla(145, 63%, 40%, 1)',
          darken1: 'hsla(145, 63%, 44%, 1)',
          default: 'hsla(145, 63%, 49%, 1)',
          lighten1: 'hsla(145, 63%, 52%, 1)',
          lighten2: 'hsla(145, 63%, 56%, 1)',
        },
        secondary: {
          darken1: 'hsla(203, 73%, 36%, 1)',
          default: 'hsla(203, 73%, 41%, 1)',
          lighten1: 'hsla(203, 73%, 46%, 1)'
        }
      }
    }
  },
  computed: {
    // projectStyle(){
    //   return {
    //     'background-image': `url(${this.bg})`,
    //   }
    // }
  },
  mounted() {
    this.$bus.$on('colorChange', (data) => {
      this.color = data;
    });
  },
  directives: {
    flow: {
      inPaddedViewport (el) {
        var rect = el.getBoundingClientRect()
        //debugger;
        return !(rect.bottom-150 < 0 || rect.right < 0 || 
                rect.left > window.innerWidth ||
                rect.top+150 > window.innerHeight)
      },
      inViewport (el) {
        var rect = el.getBoundingClientRect()
        return !(rect.bottom < 0 || rect.right < 0 || 
                rect.left > window.innerWidth ||
                rect.top > window.innerHeight)
      },
      bind(el, binding) {
        el.classList.add('flow-'+binding.arg+'-before-enter')
        el.$onScroll = function() {
          if(binding.modifiers.inView === true){
            if (binding.def.inPaddedViewport(el)) {
              el.classList.add('inView')
              el.classList.remove('not-inView')
              //binding.def.unbind(el, binding)        
            }else{
              el.classList.add('not-inView')
              el.classList.remove('inView')
              //binding.def.bind(el, binding)        
            }

            if (binding.def.inViewport(el)) {
              el.classList.add('flow-'+binding.arg+'-enter')
              el.classList.remove('flow-'+binding.arg+'-before-enter')
              //binding.def.unbind(el, binding)        
            }
          }else{
            if (binding.def.inViewport(el)) {
              el.classList.add('flow-'+binding.arg+'-enter')
              el.classList.remove('flow-'+binding.arg+'-before-enter')
              binding.def.unbind(el, binding)        
            }
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
  text-align: left;

  &--left{
    //text-align: left;
    .project-single-article {
      float: left;
    }
    .project-single-figure {
      float: right;
    }
  }
  &--right{
    //text-align: right;
    .project-single-article {
      float: right;
    }
    .project-single-figure {
      float: left;
    }
  }

  &-link {
    min-height: 25rem;//400px
    padding: 5rem 3rem;
    display: block;
    transition: .2s ease-in-out background-color;

    .filter::before {
      transition: .2s ease-in-out opacity;
    }

    &:active, 
    &:hover, 
    &:focus {
      background-color: hsla(0, 0%, 0%, .1);
      transition: .2s ease-in-out background-color;

      .filter::before {
        opacity: 0;
        transition: .2s ease-in-out opacity;
      }

      // .project-single-title {
      //   opacity: 1;
      //   transition: .2s ease-in-out opacity;
      // }
    }

    .inView.filter::before {
      opacity: 0;
      transition: .2s ease-in-out opacity;
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
    //max-width: 500px;
  }
}

</style>
