<template>
  <main class="container">

    <sp-intro>
      <template #title>Contact</template>
      <template #subtitle>Info</template>
    </sp-intro>

  </main>
</template>

<script setup>
import spIntro from '@/components/Intro.vue'
import { onMounted, ref } from 'vue'

const moveThatBus = ref(null)

onMounted(async () => {
  moveThatBus.value = await import('movethatbus.js')
  // Initialize or use moveThatBus.value here
  moveThatBus.value.init()
})
</script>