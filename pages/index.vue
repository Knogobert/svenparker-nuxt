<template>
  <main class="container">

    <section class="sp-intro">
      <h1 class="title">
        Sven Parker
      </h1>
      <!-- <h2 class="subtitle">
        Personal portfolio
      </h2> -->
      <div class="links">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
    </section>

    <sp-projects></sp-projects>

  </main>
</template>

<script>
import spProjects from '~/components/Projects.vue'

export default {
  components: {
    spProjects
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.sp-intro {
  background-color: #2ECC71;
  width: 100%;
  flex-basis: 100%;
  min-height: 500px;
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
    font-size: 42px;
    color: #F6F6F6 - 2;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  a {
    //color: #0B29FB;
  }
}

</style>