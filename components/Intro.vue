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
          <slot></slot>
        </p>
        <!-- <ul class="links">
          <li class="links-link" v-for="link in links" :key="link.name">
            <nuxt-link :to="link.path" :style="{ 'background-color': color.secondary.darken1 }">{{ link.name }}</nuxt-link>
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

<script>
//import spImageLoader from '~/components/@image-loader/ImageLoader.vue';

export default {
  name: 'sp-Intro',
  // components: {
  //   spImageLoader
  // },
  data() {
    return {
      show: false,
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
    links() {
      return [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ]
    }
  },
  mounted() {
    // Add classname if supported
    if (typeof window.getComputedStyle(document.body).mixBlendMode !== 'undefined') {
      document.documentElement.className += " mix-blend-mode";
    }

    this.$bus.$on('colorChange', (data) => {
      this.color = data;
    });
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.sp-intro {
  //background-color: #2ECC71;
  width: 100%;
  min-height: 500px;
  height: 100%;
  height: 100vh;
  //height: calc(100vh - 45px);
  max-height: 100vh;
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
    opacity: .25;
  }
  @at-root .mix-blend-mode &#{-bg} {
    opacity: 1;
    mix-blend-mode: difference;
  }

  .title {
    display: block;
    font-weight: $font-weight-light;
    font-size: 3.2rem;
    color: $white;
    letter-spacing: .0625rem;//1px

    font-variation-settings: "wght" 120, "wdth" 400;
  }

  .subtitle {
    font-weight: $font-weight-light;
    font-size: 1.2rem;
    color: $white - 5;
    word-spacing: .15rem;
    padding-bottom: 2rem;
  }

  .introduction {
    font-size: 1.2rem;
    line-height: 1.5;

    pre {
      display: inline-block;
      padding: 0 0.5rem;
      margin: 0 .5rem;
      background-color: hsla(0, 0%, 0%, .03);
    }
    a {
      position: relative;
      display: inline-block;
      font-weight: $font-weight-heavy;
      font-variation-settings: "wght" 160, "wdth" 420;
      transition: font-variation-settings .2s ease-in-out;

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: 0;
        left: 0;
        background-color: hsla(0, 0%, 0%, .15);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }

      &:active, 
      &:hover, 
      &:focus {
        font-variation-settings: "wght" 100, "wdth" 444;
        transition: font-variation-settings .2s ease-in-out;

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
        background-color: hsla(0, 0%, 0%, .1);
        padding: 1rem;
        border-radius: .2rem;
        user-select: none;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-sm){
    .title {
      font-size: 4rem;
    }
    .subtitle {
      font-size: 1.4rem;
      word-spacing: .375rem;
    }
    .introduction {
      font-size: 1.3rem;
      line-height: 1.8;
    }
  }
  @media only screen and (min-width: $breakpoint-md){
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
}

</style>