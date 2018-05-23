<template>
  <main class="container">

    <section>
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

    <project/>

  </main>
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  }
}
</script>

<style>
</style>´