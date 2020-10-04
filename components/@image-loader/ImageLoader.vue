<template>

  <div class="sp-image-loader">
    <transition name="fade-in">
      <img
        v-show="imageLoaded"
        :src="imageSrc"
        :class="classNames"
        loading="lazy"
        @load="onLoaded">
    </transition>
  </div>

</template>

<script>
export default {
  name: 'SpImageLoader',
  props: {
    src: {
      type: String,
      default: '/general/green-gmap-pp-cutout.png'
    },
    classes: {
      type: String,
      default: 'image-loader'
    }
  },

  data: function() {
    return {
      imageLoaded: false,
      imageSrc: this.src,
      classNames: this.classes
    }
  },

  methods: {
    onLoaded() {
      this.imageLoaded = true
    }
  }
}
</script>

<style scoped>
.fade-in-enter-active {
  transition: opacity 0.25s ease-in-out;
}
.fade-in-enter-to {
  opacity: 1;
}
.fade-in-enter {
  opacity: 0;
}
</style>
