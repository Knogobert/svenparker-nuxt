<template>
  <main class="container">

    <sp-intro>
      <template slot="title">Sven Parker</template>
      <template slot="subtitle">Web Developer / Web Designer</template>
      I have an affectionate relationship with web development and always try to stay updated with the latest on the matter. I can handle responsive HTML5, CSS, SASS, JS, JSON, Gulp, Git, MySQL, Wordpress & PHP.
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