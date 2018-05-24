<template>
  <main class="container">

    <sp-intro>
      <template slot="title">Sven Parker</template>
      <template slot="subtitle">Web Developer / Web Designer</template>
    </sp-intro>

    <sp-projects></sp-projects>

  </main>
</template>

<script>
import spIntro from '~/components/Intro.vue'
import spProjects from '~/components/Projects.vue'

export default {
  name: 'index-page',
  components: {
    spIntro,
    spProjects
  }
}
</script>