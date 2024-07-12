// @ts-ignore-next-line
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const eventBus = new EventBus()
  nuxtApp.provide('eventBus', eventBus)
})

class EventBus {
  constructor() {
    this.events = {}
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }

  emit(event, data) {
    const callbacks = this.events[event]
    if (callbacks) {
      callbacks.forEach(callback => callback(data))
    }
  }
}