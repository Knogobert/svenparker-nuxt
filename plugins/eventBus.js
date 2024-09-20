// @ts-ignore-next-line
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const eventBus = {
    on(event, callback) {
      window.addEventListener(event, (e) => callback(e.detail))
    },
    emit(event, data) {
      window.dispatchEvent(new CustomEvent(event, { detail: data }))
    }
  }
  nuxtApp.provide('eventBus', eventBus)
})