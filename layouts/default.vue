<template>
  <div>
    <sp-logo />
    <div class="o-wrapper">
      <NuxtPage />
    </div>
    <sp-footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import spLogo from '@/components/Logo.vue'
import spFooter from '@/components/Footer.vue'

onMounted(() => {
  if (import.meta.client) {
    if (localStorage.themeColor) {
      const savedColor = JSON.parse(localStorage.themeColor).color
      document.documentElement.style.setProperty('--theme-color', savedColor) // 1. Initial
    }
  }
})
</script>

<style lang="scss">
.o-wrapper {
  background-color: var(--theme-color);
  transition: background-color 0.3s ease;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
</style>