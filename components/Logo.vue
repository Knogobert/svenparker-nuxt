<template>
  <div class="sp-logo">
    <svg
      id="SPizza"
      class="sp-logo-overColorPicker"
      viewBox="0 0 1080 1080">
      <!-- <circle id="SPizza-bg" :class="[ bgColorClass ]" cx="535" cy="528" r="500"/> -->
      <path
        id="SPizza-path"
        class="svg-fill--white"
        d="M868.2 497.5C849.9 441.7 811.8 395.7 783 367c-41.7-41.7-79.1-70-111-84.1-26.7-11.7-49.7-13.7-68.6-5.9-28 11.6-38.1 41.5-39.3 54.4L198.8 624c-3.2 2.5-5.3 6.1-6.2 9.9-2.9 8.2-2.3 18.5 1.9 27.5 6.1 12.8 18 20 32.7 20 2.1 0 4.3-.2 6.5-.5l46.3-6.2v12.9c0 12.3 10 22.4 22.4 22.4 12.3 0 22.4-10 22.4-22.4v-18.9l12-1.6c3.4 8.1 11.4 13.8 20.7 13.8 11.4 0 20.8-8.5 22.2-19.5l225.1-30.1c4.1 4.7 10.1 7.6 16.8 7.6 8.8 0 16.4-5.1 20.1-12.5L850 598.6c.3 0 .5-.1.8-.2 16.2-4.8 26.6-19.7 26.5-35.8 1.5-7.7 1.7-32.2-9.1-65.1zM232.3 671c-6.3.9-21.6 1.2-28.8-14-.5-1.1-1-2.2-1.3-3.3.5.2 1 .4 1.6.6 1.5.5 2 .7 76.2-9.2v19.4l-47.7 6.5zm92.4-31.7c3.4-.4 6.8-.9 10.3-1.4v19.4l-10.3 1.4v-19.4zm55 12v-19.4c37.2-5 80.2-10.8 128.7-17.3 30.6-4.1 61.2-8.3 90.6-12.2v14.2c0 1.8.2 3.6.7 5.3l-220 29.4zm259-70.4c-2.8 0-5 2.2-5 5v31.5c-.4 6.5-5.8 11.6-12.3 11.6-5.4 0-10-3.5-11.7-8.4-.4-1.2-.7-2.6-.7-4v-26.1c0-2.8-2.2-5-5-5s-5 2.2-5 5v1.8c-75.7 10.2-153.2 20.7-219.3 29.5v-.9c0-2.8-2.2-5-5-5s-5 2.2-5 5v37.7c0 1.5-.3 2.9-.8 4.2-1.7 4.7-6.3 8.1-11.6 8.1-4.2 0-7.8-2.1-10.1-5.2-1.4-2-2.3-4.5-2.3-7.1v-33.1c0-2.8-2.2-5-5-5s-5 2.2-5 5v2.3c-3.5.5-6.9.9-10.3 1.4v-.3c0-2.8-2.2-5-5-5s-5 2.2-5 5v58.7c0 6.8-5.5 12.4-12.4 12.4-6.8 0-12.4-5.5-12.4-12.4v-54.1c0-2.8-2.2-5-5-5s-5 2.2-5 5v1.6c-41 5.4-68.3 8.9-73.8 9.5-2.9-1.4-3.7-4.1-3.9-5.3-.2-1-.2-2 0-2.9.8-1.9 1.8-3.5 3.2-4.8.2-.2.4-.4.6-.7l365.4-292.6.8-.6c.1 0 .1-.1.2-.1 3.5-1.7 18.7-5.5 42.8.7C656.5 349 694.9 381 720 406c44.3 44.3 64.5 86.2 73.7 113.5 6.2 18.4 8.3 32.8 9 41.2-.1 1.3-.1 2.6-.1 4-46.1 6.3-101.1 13.7-158.8 21.6v-.3c-.1-2.8-2.3-5.1-5.1-5.1zm209.3 7.9l-204.3 27.3v-19.7c92-12.5 162.9-22.1 164.9-22.4.3 0 .6-.1.8-.2.9-.3 1.7-.8 2.3-1.5.4-.4.6-.9.8-1.4.2-.5.3-1.1.3-1.8 0-.6.1-3.6-.3-8.5 1.2-10.7 8.9-20.3 19.7-23.5 14.3-4.2 29.3 4 33.5 18.2 4.4 14.2-3.6 29.1-17.7 33.5zm-18.5-61.3c-8.1 2.4-14.9 7.4-19.6 13.9-1.4-7.1-3.5-15.3-6.6-24.5-9.5-28.5-30.4-72.1-76.3-118-37.7-37.7-74.4-61.3-109.3-70.3-19.5-5-33.9-4.2-42.6-2.2 3-12.2 12.2-32 32.2-40.2 26.1-10.8 76.5-4.3 168.6 87.8 50.7 50.7 73 96.8 82.7 126.6 4.8 14.6 7.3 27.2 8.4 37.2-9.1-9.9-23.6-14.4-37.5-10.3zM608 465.8c-7.5 7.5-19.7 7.5-27.2 0l-7.9-7.9c-7.5-7.5-7.5-19.7 0-27.2l20.4-20.4-11.1-11.7c-3.4-3.6-2.7-9.4 1.4-12.2 19.4-13.2 46.1-11.2 63.3 6s19.2 43.9 6 63.3c-2.8 4.1-8.6 4.8-12.2 1.4l-12.4-11.8-20.3 20.5zm89.9 68.4l-8.6 24.1c-2.2 6.2-9.2 9.8-15.5 8-38.5-10.9-27.7-26.9-64.9-37.9-7.1-2.1-10.9-9.6-8.4-16.6l8.6-24.1c2.2-6.2 9.2-9.8 15.5-8 38.5 10.9 27.7 26.9 64.9 37.9 7.1 2.1 10.9 9.6 8.4 16.6zM475 509.6c-3.6 3.6-9.5 3-12.3-1.2-13-19.3-10.9-45.7 6.1-62.7s43.4-19.1 62.7-6.1c4.2 2.8 4.8 8.8 1.2 12.3L475 509.6zm24.3 5.6c3.3-3.9 9.2-3.8 12.4.2 14.6 18.1 14.9 44.5-.6 63s-41.6 22.8-61.9 11.6c-4.4-2.4-5.6-8.3-2.3-12.2l52.4-62.6zm-112.9 64.6L367 568.6c-3.8-2.2-5.1-7.1-2.9-10.9l26.4-45.7c2.2-3.8 7.1-5.1 10.9-2.9l19.4 11.2c3.8 2.2 5.1 7.1 2.9 10.9l-26.4 45.7c-2.2 3.8-7.1 5.1-10.9 2.9zm355.4-94.2l-19.4 11.2c-3.8 2.2-8.7.9-10.9-2.9l-26.4-45.7c-2.2-3.8-.9-8.7 2.9-10.9l19.4-11.2c3.8-2.2 8.7-.9 10.9 2.9l26.4 45.7c2.3 3.8.9 8.7-2.9 10.9zm-200.3-64.3c-2.1 0-4-1.3-4.7-3.3-1.4-3.9-2-7.5-1.8-10.8.2-4.3 1.8-8.1 4.6-11.3 2.3-2.5 5.4-4.7 9.2-6.3 2.5-1.1 4.4-2.3 5.7-3.8s2-3.1 2.1-5.2c.1-2-.3-4.3-1.2-6.9s.4-5.5 3-6.4 5.5.4 6.4 3c1.4 3.9 2 7.5 1.8 10.8-.2 4.3-1.8 8.1-4.6 11.3-2.3 2.5-5.4 4.7-9.2 6.3-2.5 1.1-4.4 2.3-5.7 3.8s-2 3.1-2.1 5.2c-.1 2 .3 4.3 1.2 6.9s-.4 5.5-3 6.4c-.6.2-1.1.3-1.7.3zm-222 180.1c-1.2 0-2.5-.1-3.7-.4-3.3-.7-6.7-2.3-10.1-4.8-2.2-1.6-4.2-2.6-6.1-3s-3.7-.1-5.5.8c-1.8.9-3.6 2.4-5.4 4.5s-4.9 2.4-7 .6c-2.1-1.8-2.4-4.9-.6-7 2.7-3.1 5.5-5.5 8.5-7 3.8-2 7.9-2.5 12-1.7 3.3.7 6.7 2.3 10.1 4.8 2.2 1.6 4.2 2.6 6.1 3s3.7.1 5.5-.8c1.8-.9 3.6-2.4 5.4-4.5s4.9-2.4 7-.6c2.1 1.8 2.4 4.9.6 7-2.7 3.1-5.5 5.5-8.5 7-2.6 1.4-5.4 2.1-8.3 2.1zm445.7-56.1c-3.8 0-7.3-1.1-10.4-3.2-2.8-1.9-5.3-4.7-7.4-8.4-1.4-2.3-2.8-4.1-4.4-5.2-1.6-1.1-3.3-1.6-5.4-1.4-2 .1-4.2.8-6.7 2.1-2.5 1.2-5.5.2-6.7-2.2-1.2-2.5-.2-5.5 2.2-6.7 3.7-1.8 7.2-2.9 10.5-3.1 4.3-.3 8.3.8 11.7 3.2 2.8 1.9 5.3 4.7 7.4 8.4 1.4 2.3 2.8 4.1 4.4 5.2 1.6 1.1 3.3 1.6 5.4 1.4 2-.1 4.2-.8 6.7-2.1 2.5-1.2 5.5-.2 6.7 2.2 1.2 2.5.2 5.5-2.2 6.7-3.7 1.8-7.2 2.9-10.5 3.1h-1.3zm-182.9 11c-.3 0-.6 0-.9-.1-4-.7-7.5-2-10.3-3.8-3.6-2.4-6.1-5.6-7.5-9.6-1.1-3.2-1.4-7-.9-11.1.3-2.7.2-5-.4-6.8-.6-1.9-1.7-3.3-3.4-4.4-1.7-1.1-3.9-1.9-6.6-2.4-2.7-.5-4.5-3.1-4-5.8s3.1-4.5 5.8-4c4 .7 7.5 2 10.3 3.8 3.6 2.4 6.1 5.6 7.5 9.6 1.1 3.2 1.4 7 .9 11.1-.3 2.7-.2 5 .4 6.8.6 1.9 1.7 3.3 3.4 4.4 1.7 1.1 3.9 1.9 6.6 2.4 2.7.5 4.5 3.1 4 5.8-.4 2.4-2.5 4.1-4.9 4.1z"
      />
    </svg>
    <color-picker
      v-model="color"
      @input="onColorPick" />
      <!-- @select="onColorPickRelease" -->
  </div>
</template>

<script>
import ColorPicker from '@/components/@radial-color-picker/vue-color-picker/ColorPicker.vue'
import { useThrottleFn } from '@vueuse/core'

export default {
  name: 'SpLogo',
  components: {
    ColorPicker
  },
  data() {
    return {
      hide: true,
      bgColorClass: 'svg-fill--green',
      color: {
        hue: 244,
        saturation: 63,
        luminosity: 49,
        alpha: 1
      } // Default set color
    }
  },
  mounted() {
    if (localStorage.themeColor) {
      let ls = JSON.parse(localStorage.themeColor)
      this.color = ls.values
    }
  },
  methods: {
    onColorPick(evt) {
      this.color = evt
      this.$emit('bodyColorChange', Math.round(this.color.hue))
      const colorString = `hsla(${Math.round(this.color.hue)}, ${this.color.saturation}%, ${this.color.luminosity}%, ${this.color.alpha})`;
      document.documentElement.style.setProperty('--theme-color', colorString) // 3. After save
      this.updateFavicon(colorString);
    },
    // onColorPickRelease() {
    //   this.$emit('bodyColorChange', Math.round(this.color.hue), true)
    // }
    updateFavicon: useThrottleFn(function(color) {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');

      // Convert HSLA to RGBA if necessary
      if (color.startsWith('hsla')) {
        const hsl = color.match(/hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*(\d+(\.\d+)?)\)/);
        const h = hsl[1] / 360;
        const s = hsl[2] / 100;
        const l = hsl[3] / 100;
        const a = hsl[4];
        let r, g, b;
        if (s === 0) {
          r = g = b = l; // achromatic
        } else {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          };
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
        color = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
      }

      // Draw a filled circle
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, 2 * Math.PI);
      ctx.fill();

      const updateFavi = () => {
        // Update favicon
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = canvas.toDataURL("image/x-icon");
        document.getElementsByTagName('head')[0].appendChild(link);
      }

      // Load the safari-pizza.svg image
      const img = new Image();
      img.src = '/safari-pizza.svg';
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        updateFavi();
      }
      img.onerror = updateFavi
    }, 100)
  }
}
</script>

<style lang="scss">
//@import '@/components/@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';

.sp-logo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  padding: 1rem;
  z-index: 100;

  display: flex;
  justify-content: center;

  text-align: center;
  // pointer-events: none;

  a {
    margin: 10px 0 0;
  }

  &-overColorPicker {
    z-index: 100;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    top: 1.75rem;
    left: calc(50% - 2.5rem);
    overflow: hidden;
    position: absolute;
  }

  svg {
    // height: auto;
    // width: 100%;
    // max-height: 180px;
    z-index: 130;
    pointer-events: none;

    .svg {
      &-fill--green {
        fill: $ufo;
      }
      &-fill--white {
        fill: $white;
      }
      &-fill--black {
        fill: $black;
      }
    }
  }

  .hide {
    visibility: hidden;
  }
  .show {
    visibility: visible;
  }

  // Overwrites for vue-color-picker plugin
  .color-picker {
    height: 100px;
    width: 100px;
    min-width: 100px;

    .palette {
      box-shadow: 0 0 20px 0px rgba($black, 0.1);

      &::before {
        background-color: transparent;
      }

      &.is-in {
        transform: scale(1);
        opacity: 1;
      }
    }
    .rotator {
      z-index: 110;
      &.dragging {
        z-index: 130;
      }
    }
    .selector {
      z-index: 120;
      width: 77%;
      height: 77%;
      top: 11.5%;
      left: 11.5%;
      border: none;
      box-shadow: 0 5px 20px 0 rgba($black, 0.15);
      transition: box-shadow 0.2s ease-in-out;
      &:active,
      &:focus,
      &:hover {
        box-shadow: 0 0 0 0 rgba($black, 0.15);
        transition: box-shadow 0.2s ease-in-out;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-sm) {
    &-overColorPicker {
      width: 8rem;
      height: 8rem;
      top: 1.7rem;
      left: calc(50% - 4rem);
    }
    .color-picker {
      height: 150px;
      width: 150px;
      min-width: 150px;

      .palette {
        &.is-in {
          transform: scale(0.8);
          opacity: 1;
        }
      }
    }
  }
}
</style>
