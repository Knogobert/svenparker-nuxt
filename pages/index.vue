<template>
  <main class="container">
    <sp-intro>
      <template #title>Sven Parker</template>
      <template #subtitle>Web Developer / Web Designer</template>
      <small>
        I love keeping up to date in the latest and have an eagerness to always learn more.
        <br>
        To find out what I'm up to, check out my
        —
        <a
          href="https://github.com/Knogobert/"
          target="_blank"
          rel="noopener noreferrer"
        >Github</a>
        —
        <a
          href="https://codepen.io/Knogobert/"
          target="_blank"
          rel="noopener noreferrer"
        >Codepen</a>
        —
        <a
          href="https://vsco.co/svenparker/"
          target="_blank"
          rel="noopener noreferrer"
        >VSCO</a>
        —
        <a
          href="http://se.linkedin.com/in/SvenParker"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</a>
        —
        <a
          href="#"
          @click.prevent="scrollSmooooovelyTo('.project-single')"
        >Or just scroll.</a>
      </small>
    </sp-intro>

    <sp-projects />
  </main>
</template>

<script setup>
import SpIntro from '@/components/Intro.vue'
import SpProjects from '@/components/Projects.vue'

defineOptions({
  name: 'IndexPage'
})

const scrollSmooooovelyTo = (selector) => {
  if (import.meta.client) document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
}

</script>
