<template>

  <div class="sp-image-loader">
    <transition name="fade">
      <img :src="imageSrc" :class="classNames" @load="onLoaded" v-show="loaded"/>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'sp-image-loader',
  props: [
    'src',
    'classes'
  ],

  data: function () {
    return {
      loaded: false,
      imageSrc: this.src,
      classNames: this.classes
    }
  },

  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity .25s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>
