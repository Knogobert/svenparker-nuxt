<template>
  <section class="container">
    <div>
      <app/>
      <h1 class="title">
        Contact
      </h1>
      <h2 class="subtitle">
        Personal portfolio
      </h2>
      <div class="links">
        <nuxt-link to="/">
          <vs-button vs-type="primary-filled">
            Index
          </vs-button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import App from '~/components/App.vue'

export default {
  components: {
    App
  }
}
</script>

<style>
</style>