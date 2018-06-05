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
    </div>
  </section>

</template>

<script>
export default {
  name: 'sp-Intro',
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

  .title {
    display: block;
    font-weight: $font-weight-light;
    font-size: 3.2rem;
    color: $white;
    letter-spacing: .0625rem;//1px
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