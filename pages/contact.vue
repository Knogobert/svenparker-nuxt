<template>
  <main class="container">

    <sp-intro>
      <template slot="title">Contact</template>
      <template slot="subtitle">Info</template>
    </sp-intro>

  </main>
</template>

<script>
import spIntro from '~/components/Intro.vue'
import moveThatBus from 'movethatbus.js'

export default {
  name: 'ContactPage',
  components: {
    spIntro
  },
  mounted() {
    moveThatBus.init()
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';
</style>
