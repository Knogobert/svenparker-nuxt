<template>
  <main class="container">

    <section class="sp-intro">
      <h1 class="title">
        Sven Parker
      </h1>
      <h2 class="subtitle">
        Personal portfolio
      </h2>
      <div class="links">
        <nuxt-link to="/contact">
          <vs-button vs-type="primary-filled">
            Contact
          </vs-button>
        </nuxt-link>
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

<style>
.sp-intro {
  flex-basis: 100%;
  min-height: 500px;
  max-height: 100vh;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>