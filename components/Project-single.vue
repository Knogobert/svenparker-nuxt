<template>
  <div
    :class="[{'project-single--left': index % 2 === 0, 'project-single--right': index % 2 !== 0}, 'project-'+slug ]"
    class="project-single"
  >
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
          class="project-single-article col-6 mb-sm-2"
          v-motion
          :duration="1000"
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0}"
        >
          <!-- v-motion-show-down -->
          <h3 class="project-single-title">
            <slot name="title" />
          </h3>
          <h5 class="project-single-subtitle">
            <slot name="date" />
          </h5>
          <p class="project-single-description">
            <slot name="description" />
          </p>
          <h4 class="project-single-visit">— Go to site</h4>
        </article>
        <figure
          class="project-single-figure col-6 filter"
          v-motion
          :duration="1000"
          :initial="{ opacity: 0, y: -50 }"
          :visible-once="{ opacity: 1, y: 0}"
        >
          <!-- v-motion-show-up -->
          <NuxtImg
            :src="image"
            :alt="title"
            loading="lazy"
          />
          <!-- <transition name="fade-in"> -->
              <!-- v-show="imageLoaded"
              @load="onLoaded" -->
          <!-- </transition> -->
        </figure>
      </div>
      <div
        v-else
        class="grid-row"
      >
        <article
          class="project-single-article col-12 mb-sm-2"
          v-motion
          :duration="1000"
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0}"
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
          <h4 class="project-single-visit">— Go to site</h4>
        </article>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const props = defineProps({
  index: {
    type: Number,
    default: 0
  },
  slug: {
    type: String,
    default: 'slug'
  },
  title: {
    type: String,
    default: 'Title'
  },
  url: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})

const imageLoaded = ref(true)
const onLoaded = () => {
  imageLoaded.value = true
}

useMotion()
</script>

<style lang="scss">
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
      .project-single-visit {
        opacity: 1;
        transform: translateX(0%);
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
  // &-description {
  //   max-width: 500px;
  // }
  // &-figure {
  //   opacity: 0;
  // }
  &-visit {
    margin-top: 2rem;
    font-weight: normal;
    opacity: 0;
    transform: translateX(-2rem);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
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