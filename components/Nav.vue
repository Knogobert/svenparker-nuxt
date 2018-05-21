<template>
  <vs-topbar class="nav-main" vs-color="primary" vs-justify="space-between" vs-align="center">
    <!-- <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="dark-flat" vs-icon="menu"></vs-button> -->
    <nuxt-link to="/"><vs-button vs-type="dark-line-down">Home</vs-button></nuxt-link>
    <nuxt-link to="/contact"><vs-button vs-type="dark-line-down">Contact</vs-button></nuxt-link>
    <!-- <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="dark-flat" vs-icon="more_vert"></vs-button> -->
  </vs-topbar>
</template>

<style>
.nav-main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  text-align: center;
  background-color: grey !important;
}
</style>
