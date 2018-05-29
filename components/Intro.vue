<template>

  <section class="sp-intro">
    <h1 class="title">
       <slot name="title">Title</slot>
    </h1>
    <h2 class="subtitle">
      <slot name="subtitle">Subtitle</slot>
    </h2>
    <ul class="links">
      <li class="links-link" v-for="link in links" :key="link.name">
        <nuxt-link :to="link.path" :style="{ 'background-color': color.secondary.darken1 }" @click="$bus.$emit('colorChange')">{{ link.name }}</nuxt-link>
        <!-- :style="{ 'background-color': color.primary.darken1 }" -->
      </li>
    </ul>
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
  padding: 10rem 1rem 4rem;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .title {
    display: block;
    font-weight: 300;
    font-size: 4rem;
    color: $white;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 1rem;
    color: $white - 5;
    word-spacing: 5px;
    padding-bottom: 15px;
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
      }
    }
  }

  @media only screen and (min-width: 500px){
    .subtitle {
      font-size: 1.8rem;
    }
    .title {
      font-size: 5rem;
    }
  }
  @media only screen and (min-width: 640px){
    .subtitle {
      // font-size: 2rem;
    }
  }
}

</style>