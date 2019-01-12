<template>
  <div
    :class="[{'project-single--left': index % 2 === 0, 'project-single--right': index % 2 !== 0}, 'project-'+slug ]"
    class="project-single"
  >
    <!-- :style="projectStyle" -->
    <a
      :href="url"
      :title="'Go to '+title"
      :class="{'project-single-link--height-auto': image === undefined}"
      class="project-single-link grid-container"
      target="_blank"
    >
      <div
        v-if="image"
        class="grid-row"
      >
        <article
          v-flow:down
          class="project-single-article col-6 mb-sm-2"
        >
          <h3 class="project-single-title">
            <slot name="title" />
          </h3>
          <h5 class="project-single-subtitle">
            <slot name="date" />
          </h5>
          <p class="project-single-description">
            <slot name="description" />
          </p>
        </article>
        <figure
          v-flow:up.inView
          class="project-single-figure col-6 filter"
        >
          <!-- v-inView -->
          <transition name="fade-in">
            <img
              v-show="imageLoaded"
              :src="image"
              @load="onLoaded"
            >
          </transition>
        </figure>
      </div>
      <div
        v-else
        class="grid-row"
      >
        <article
          v-flow:down
          class="project-single-article col-12 mb-sm-2"
        >
          <h3 class="project-single-title">
            <slot name="title" />
          </h3>
          <h5 class="project-single-subtitle">
            <slot name="date" />
          </h5>
          <p class="project-single-description">
            <slot name="description" />
          </p>
        </article>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SpProjectsSingle',
  directives: {
    flow: {
      inPaddedViewport(el) {
        var rect = el.getBoundingClientRect()
        //debugger;
        return !(
          rect.bottom - 150 < 0 ||
          rect.right < 0 ||
          rect.left > window.innerWidth ||
          rect.top + 150 > window.innerHeight
        )
      },
      inViewport(el) {
        var rect = el.getBoundingClientRect()
        return !(
          rect.bottom < 0 ||
          rect.right < 0 ||
          rect.left > window.innerWidth ||
          rect.top > window.innerHeight
        )
      },
      bind(el, binding) {
        el.classList.add('flow-' + binding.arg + '-before-enter')
        el.$onScroll = function() {
          if (binding.modifiers.inView === true) {
            if (binding.def.inPaddedViewport(el)) {
              el.classList.add('inView')
              el.classList.remove('not-inView')
              //binding.def.unbind(el, binding)
            } else {
              el.classList.add('not-inView')
              el.classList.remove('inView')
              //binding.def.bind(el, binding)
            }

            if (binding.def.inViewport(el)) {
              el.classList.add('flow-' + binding.arg + '-enter')
              el.classList.remove('flow-' + binding.arg + '-before-enter')
              //binding.def.unbind(el, binding)
            }
          } else {
            if (binding.def.inViewport(el)) {
              el.classList.add('flow-' + binding.arg + '-enter')
              el.classList.remove('flow-' + binding.arg + '-before-enter')
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
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    slug: {
      type: String,
      default: 'lg'
    },
    title: {
      type: String,
      default: 'Lammet & Grisen'
    },
    url: {
      type: String,
      default: 'https://lammet.nu/'
    },
    image: {
      type: String,
      default: '/projects/snap-LG.jpg'
    }
  },
  data() {
    return {
      imageLoaded: false
    }
  },
  computed: {
    // projectStyle(){
    //   return {
    //     'background-image': `url(${this.bg})`,
    //   }
    // }
  },
  methods: {
    onLoaded() {
      this.imageLoaded = true
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

  &--left {
    //text-align: left;
    .project-single-article {
      float: left;
    }
    .project-single-figure {
      float: right;
    }
  }
  &--right {
    //text-align: right;
    .project-single-article {
      float: right;
    }
    .project-single-figure {
      float: left;
    }
  }

  &-link {
    min-height: 25rem; //400px
    padding: 3rem 1.5rem;
    display: block;
    transition: 0.2s ease-in-out background-color;

    .filter::before {
      transition: 0.2s ease-in-out opacity;
    }

    &:active,
    &:hover,
    &:focus {
      background-color: hsla(0, 0%, 0%, 0.05);
      transition: 0.2s ease-in-out background-color;

      .filter::before {
        opacity: 0;
        transition: 0.2s ease-in-out opacity;
      }

      .project-single-title {
        font-variation-settings: 'wght' 80, 'wdth' 500;
        transition: font-variation-settings 0.2s ease-in-out;
      }
    }

    .inView.filter::before {
      opacity: 0;
      transition: 0.2s ease-in-out opacity;
    }

    &--height-auto {
      min-height: auto;
    }

    @media only screen and (min-width: $breakpoint-xs) {
      padding: 5rem 3rem;
    }
  }

  h3,
  h4,
  h5,
  p {
    color: $white;
  }
  &-title {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    font-variation-settings: 'wght' 130, 'wdth' 480;
    transition: font-variation-settings 0.2s ease-in-out;
  }
  &-subtitle {
    margin-bottom: 0.5rem;
  }
  &-description {
    //max-width: 500px;
  }
  &-figure {
    //opacity: 0;
  }

  @media only screen and (min-width: $breakpoint-sm) {
    &-title {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: $breakpoint-md) {
    .flow-up-enter {
      animation: fromTransparent 1.5s;
    }
  }
}
</style>
