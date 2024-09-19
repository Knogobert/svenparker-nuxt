<template>
  <div>
    <sp-logo @bodyColorChange="bodyColorChanged"/>

    <div
      :style="{ 'background-color': themeColor }"
      class="o-wrapper">
      <NuxtPage/>
    </div>

    <sp-footer/>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import spLogo from '@/components/Logo.vue'
import spFooter from '@/components/Footer.vue'

const themeColor = ref('')
const defaultColor = {
  hue: 349,
  saturation: 63,
  luminosity: 49,
  alpha: 1
}

watch(themeColor, () => {
  if (import.meta.client) document.body.style.backgroundColor = themeColor.value
})

const bodyColorChanged = (hue) => {
  themeColor.value = stringifyColor(hue)
  // Emit event to update other components
}

const stringifyColor = (hue) => {
  return (
    'hsla(' +
    hue +
    ', ' +
    defaultColor.saturation +
    '%, ' +
    defaultColor.luminosity +
    '%, ' +
    defaultColor.alpha +
    ')'
  )
}

onMounted(() => {
  if (import.meta.client)  {
    if (localStorage.themeColor) {
      themeColor.value = JSON.parse(localStorage.themeColor).color
    } else {
      themeColor.value = stringifyColor(defaultColor.hue)
    }

    document.body.style.backgroundColor = themeColor.value
  }
})
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
</style>