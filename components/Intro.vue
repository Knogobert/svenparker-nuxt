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
        <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </section>

</template>

<script>
export default {
  data() {
    return {
      show: false
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
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.sp-intro {
  background-color: #2ECC71;
  width: 100%;
  flex-basis: 100%;
  min-height: 300px;
  height: calc(100vh - 55px);
  max-height: 100vh;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: $white;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 2rem;
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
        background-color: $ufo-d3;
        padding: 1rem;
        border-radius: .2rem;
      }
    }
  }
}

</style>