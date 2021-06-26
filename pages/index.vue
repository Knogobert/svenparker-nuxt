<template>
  <main class="container">
    <sp-intro>
      <template slot="title">Sven Parker</template>
      <template slot="subtitle">Web Developer / Web Designer</template>
      <small>
        I love keeping up to date in the latest and have an eagerness to always learn more.
        <br>
        To find out what I'm up to, check out my
        —
        <a
          href="https://github.com/Knogobert/"
          target="_blank"
        >Github</a>
        —
        <a
          href="https://codepen.io/Knogobert/"
          target="_blank"
        >Codepen</a>
        —
        <a
          href="https://vsco.co/svenparker/"
          target="_blank"
        >VSCO</a>
        —
        <a
          href="http://se.linkedin.com/in/SvenParker"
          target="_blank"
        >LinkedIn</a>
        —
        <a
          href="#"
          @click.prevent="scrollSmooooovelyTo('.project-lg')"
        >Or just scroll.</a>
      </small>
    </sp-intro>

    <sp-projects />
  </main>
</template>

<script>
import SpIntro from '~/components/Intro.vue'
import SpProjects from '~/components/Projects.vue'

export default {
  name: 'IndexPage',
  components: {
    SpIntro,
    SpProjects
  },
  methods: {
    scrollSmooooovelyTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
