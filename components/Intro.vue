<template>

  <section class="sp-intro grid-container grid-container--pad">
    <div class="grid-row">
      <article class="sp-intro-inner col-10">
        <h1 class="title">
          <slot name="title">Title</slot>
        </h1>
        <h2 class="subtitle">
          <slot name="subtitle">Subtitle</slot>
        </h2>
        <p class="introduction">
          <slot />
        </p>
        <!-- <ul class="links">
          <li class="links-link" v-for="link in links" :key="link.name">
            <nuxt-link :to="link.path" :style="{ 'background-color': color.primary }">{{ link.name }}</nuxt-link>
          </li>
        </ul> -->
      </article>
      <!-- <img  src="/general/green-gmap-pp-cutout.png"/> -->
      <!-- <sp-image-loader 
      :src="'/general/green-gmap-pp-cutout.png'"
      :smallSrc="'https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20'"
      :classes="'sp-intro-bg'">
      </sp-image-loader> -->
    </div>
  </section>

</template>

<script setup>
//import spImageLoader from '@/components/@image-loader/ImageLoader.vue';
// import { ref } from 'vue'

// const links = ref(() => [
//   { name: 'Home', path: '/' },
//   { name: 'Contact', path: '/contact' }
// ])
</script>

<style lang="scss">
@use 'sass:color';
.sp-intro {
  //background-color: #2ECC71;
  width: 100%;
  min-height: 500px;
  height: 100%;
  height: 100vh;
  //height: calc(100vh - 45px);
  // max-height: 100vh;
  //padding: 30vh 7vw 4rem;

  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: left;

  &-inner {
    //max-width: 31.25rem;
    //animation: flowDown 1.5s;
  }

  &-bg {
    z-index: -1;
    position: absolute;
    bottom: -3rem;
    right: 0;

    min-width: 60%;
    max-width: 80%;

    max-height: 200%;
    object-fit: scale-down;
    //filter: invert(0) hue-rotate(180deg);
    opacity: 1;
    mix-blend-mode: difference;
  }

  .title {
    display: block;
    font-weight: $font-weight-light;
    font-size: 3.2rem;
    color: $white;
    letter-spacing: 0.0625rem; //1px

    font-variation-settings: 'wght' 120, 'wdth' 400;
  }

  .subtitle {
    font-weight: $font-weight-light;
    font-size: 1.2rem;
    // color: $white - 5;
    color: color.scale($white, $lightness: -5%);
    word-spacing: 0.15rem;
    padding-bottom: 2rem;
  }

  .introduction {
    font-size: 1.2rem;
    line-height: 1.5;

    pre {
      display: inline-block;
      padding: 0 0.5rem;
      margin: 0 0.5rem;
      background-color: hsla(0, 0%, 0%, 0.03);
    }
    a {
      position: relative;
      display: inline-block;
      font-weight: $font-weight-heavy;
      font-variation-settings: 'wght' 160, 'wdth' 420;
      transition: font-variation-settings 0.2s ease-in-out;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: 0;
        left: 0;
        background-color: hsla(0, 0%, 0%, 0.15);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }

      &:active,
      &:hover,
      &:focus {
        font-variation-settings: 'wght' 100, 'wdth' 444;
        transition: font-variation-settings 0.2s ease-in-out;

        &:before {
          visibility: visible;
          transform: scaleX(1);
        }
      }
    }
    small {
      display: inline-block;
      margin-top: 2rem;
      font-weight: initial;
    }
  }

  .links {
    display: flex;
    &-link {
      display: inline-flex;

      + .links-link {
        margin-left: 1rem;
      }

      a {
        color: $white;
        //background-color: $ufo-d3;
        background-color: hsla(0, 0%, 0%, 0.1);
        padding: 1rem;
        border-radius: 0.2rem;
        user-select: none;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-sm) {
    margin-top: 0;

    .title {
      font-size: 4rem;
    }
    .subtitle {
      font-size: 1.4rem;
      word-spacing: 0.375rem;
    }
    .introduction {
      font-size: 1.3rem;
      line-height: 1.8;
    }
  }
  @media only screen and (min-width: $breakpoint-md) {
    .title {
      font-size: 5rem;
    }
    .subtitle {
      font-size: 1.8rem;
    }
    .introduction {
      font-size: 1.4rem;
    }
  }

  // Height
  @media only screen and (max-height: $breakpoint-sm) {
    // < 540px
    margin-top: 150px;
  }
}
</style>