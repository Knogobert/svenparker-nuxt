<template>

  <div class="sp-image-loader">
    <transition name="fade-in">
      <img :src="imageSrc" :class="classNames" @load="onLoaded" v-show="imageLoaded"/>
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
      imageLoaded: false,
      imageSrc: this.src,
      classNames: this.classes
    }
  },

  methods: {
    onLoaded() {
      this.imageLoaded = true;
    }
  }
}
</script>

<style scoped>
.fade-in-enter-active {
  transition: opacity .25s ease-in-out;
}
.fade-in-enter-to {
  opacity: 1;
}
.fade-in-enter {
  opacity: 0;
}
</style>
