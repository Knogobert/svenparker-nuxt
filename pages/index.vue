<template>
  <main class="container">

    <sp-intro>
      <template slot="title">Sven Parker</template>
      <template slot="subtitle">Web Developer / Web Designer</template>
      Solving old problems with modern solutions — 
      I love keeping up to date in the latest and have an eager to always learn more. 
      <br/><small>
      To find out what I'm up to, check out my
       — <a href="https://github.com/Knogobert/" target="_blank">Github</a>
       — <a href="https://codepen.io/Knogobert/" target="_blank">Codepen</a>
       — <a href="https://vsco.co/svenparker/" target="_blank">VSCO</a>
       — <a href="http://se.linkedin.com/in/SvenParker" target="_blank">LinkedIn</a>
       — <a href="#" @click.prevent="scrollSmooooovelyTo('.project-bc')">Or just scroll.</a>
      </small>
    </sp-intro>

    <sp-projects></sp-projects>

    <sp-footer/>
  </main>
</template>

<script>
import spIntro from '~/components/Intro.vue'
import spProjects from '~/components/Projects.vue'
import spFooter from '~/components/Footer.vue'

export default {
  name: 'index-page',
  components: {
    spIntro,
    spProjects,
    spFooter
  },
  methods: {
    scrollSmooooovelyTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>