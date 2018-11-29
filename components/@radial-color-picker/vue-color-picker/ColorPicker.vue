<template>
  <div
    class="color-picker"
    tabindex="0"
    @keyup.enter="selectColor"
    @keydown.up.right.prevent="rotate($event, true)"
    @keydown.down.left.prevent="rotate($event, false)"
  >
    <div
      :class="isPaletteIn ? 'is-in' : 'is-out'"
      class="palette"
      @transitionend="toggleKnob">
      <canvas ref="palette" />
    </div>

    <div
      ref="rotator"
      :class="{ 'disabled': isDisabled, 'dragging': isDragging }"
      class="rotator"
      @dblclick.self="rotateToMouse"
      @transitionend="hidePalette"
    >
      <div
        :class="isKnobIn ? 'is-in' : 'is-out'"
        class="knob"/>
    </div>

    <div
      :class="{ 'is-rippling': isRippling }"
      class="ripple"
      @animationend="stopRipple"
    >
      <!-- :style="{ borderColor: color }" -->
    </div>

    <span
      :class="{ 'is-rippling-text': isRipplingText === 1 }"
      class="ripple-text"
    >Taste the rainbow</span>

    <ul
      v-show="1==0"
      :class="isSwatchesIn >= 1 ? 'is-swatch-in' : 'is-swatch-out'"
      class="color-swatch-list"
    >
      <li
        :value="colorChoice[0]"
        :style=" 'background-color:' + colorChoice[0]"
        class="color-swatch color-swatch--1"
      />
      <li
        :value="colorChoice[1]"
        :style=" 'background-color:' + colorChoice[1]"
        class="color-swatch color-swatch--2"
      />
      <li
        :value="colorChoice[2]"
        :style=" 'background-color:' + colorChoice[2]"
        class="color-swatch color-swatch--3"
      />
      <li
        :value="colorChoice[3]"
        :style=" 'background-color:' + colorChoice[3]"
        class="color-swatch color-swatch--4"
      />
      <li
        :value="colorChoice[4]"
        :style=" 'background-color:' + colorChoice[4]"
        class="color-swatch color-swatch--5"
      />
      <!-- // Usable random color choices
            // hsla(223, 63%, 49%, 1)
            // hsla(329, 63%, 49%, 1)
            // hsla(25, 63%, 49%, 1)
            // hsla(56, 63%, 49%, 1)
            // hsla(145, 63%, 49%, 1)
      // hsla(180, 63%, 49%, 1)-->
    </ul>

    <button
      :class="{ 'is-pressed': isPressed }"
      :style="{ backgroundColor: color }"
      :disabled="isToggling"
      type="button"
      class="selector"
      @animationend="togglePicker"
      @click="selectColor"
    />
  </div>
</template>

<script>
import fillColorWheel from '@radial-color-picker/color-wheel'
import Rotator from '@radial-color-picker/rotator'

let rotator

export default {
  name: 'VueColorPicker',
  props: {
    value: {
      type: Object,
      default: () => ({ hue: 0, saturation: 100, luminosity: 50, alpha: 1 })
    },
    step: {
      type: Number,
      default: 2
    },
    mouseScroll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      interval: 0,
      isDisabled: true,
      isDragging: false,
      isKnobIn: false,
      isPaletteIn: false,
      isPressed: false,
      isRippling: false,
      isRipplingText: 0,
      isSwatchesIn: 0,
      isToggling: false,
      colorChoice: [
        'hsla(223, 63%, 49%, 1)',
        'hsla(329, 63%, 49%, 1)',
        'hsla(25, 63%, 49%, 1)',
        'hsla(56, 63%, 49%, 1)',
        'hsla(145, 63%, 49%, 1)'
      ]
    }
  },
  computed: {
    color() {
      const { hue, saturation = 100, luminosity = 50, alpha = 1 } = this.value

      return `hsla(${hue}, ${saturation}%, ${luminosity}%, ${alpha})`
    }
  },
  watch: {
    'value.hue': function(newAngle, oldAngle) {
      if (newAngle != oldAngle) {
        rotator.angle = newAngle
      }
    }
  },
  mounted() {
    if (this.mouseScroll) {
      this.$refs.rotator.addEventListener('wheel', this.onScroll)
    }

    fillColorWheel(this.$refs.palette, this.$el.offsetWidth || 280)

    rotator = new Rotator(this.$refs.rotator, {
      inertia: 0.7,
      angle: this.value.hue,
      onRotate: this.updateColor,
      onDragStart: () => {
        this.isDragging = true
      },
      onDragStop: () => {
        this.isDragging = false
      }
    })

    window.addEventListener('resize', this.handleWindowResize)

    this.callAttention()
  },
  beforeDestroy() {
    //window.removeEventListener('resize', this.handleWindowResize)
    rotator.destroy()
    rotator = null
  },
  methods: {
    onScroll(ev) {
      if (this.isDisabled) return

      ev.preventDefault()

      if (ev.deltaY > 0) {
        rotator.angle += this.step
      } else {
        rotator.angle -= this.step
      }
    },
    rotate(ev, isIncrementing) {
      if (this.isDisabled) return

      let multiplier = isIncrementing ? 1 : -1

      if (ev.ctrlKey) {
        multiplier *= 6
      } else if (ev.shiftKey) {
        multiplier *= 3
      }

      rotator.angle += this.step * multiplier
    },
    updateColor(hue) {
      this.$emit('input', {
        hue,
        saturation: this.value.saturation || 100,
        luminosity: this.value.luminosity || 50,
        alpha: this.value.alpha || 1
      })
    },
    rotateToMouse(ev) {
      if (this.isDisabled) return

      rotator.setAngleFromEvent(ev)
    },
    selectColor() {
      this.isToggling = true
      this.isPressed = true

      if (!this.isDisabled) {
        this.$emit('select', this.value)
        this.isRippling = true
        this.isRipplingText++
        this.isSwatchesIn = 0
      } else {
        this.isPaletteIn = true
        this.isSwatchesIn++
      }
    },
    togglePicker() {
      this.callAttention(false)

      if (this.isDisabled) {
        this.isKnobIn = true
      } else {
        this.isKnobIn = false
      }

      this.isPressed = false
    },
    hidePalette() {
      if (!this.isDisabled) {
        this.isPaletteIn = false
      } else {
        this.isDisabled = false
      }
    },
    callAttention(keepRipples = true) {
      if (keepRipples === false) {
        return clearInterval(this.interval)
      }

      this.interval = setInterval(() => {
        this.isRippling = true
      }, 10000)
    },
    stopRipple() {
      this.isRippling = false
    },
    toggleKnob(ev) {
      // 'transitionend' fires for every transitioned property
      if (ev.propertyName === 'transform') {
        if (this.isDisabled) {
          this.isKnobIn = true
        } else {
          this.isDisabled = true
        }
      }
      this.isToggling = false
    },
    handleWindowResize() {
      rotator.destroy()

      fillColorWheel(this.$refs.palette, this.$el.offsetWidth || 280)

      rotator = new Rotator(this.$refs.rotator, {
        inertia: 0.7,
        angle: this.value.hue,
        onRotate: this.updateColor,
        onDragStart: () => {
          this.isDragging = true
        },
        onDragStop: () => {
          this.isDragging = false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.color-picker {
  $initial-color: #2ecc71;
  $button-border: transparent;
  $material-curve-angular: cubic-bezier(0.35, 0, 0.25, 1);

  @function z-depth-all($depth: 1) {
    $color1: 0.12, 0.19, 0.38;
    $blur1: 10px, 50px, 30px;

    $color2: 0.16, 0.24, 0.48;
    $blur2: 5px, 15px, 15px;
    @return 0 0 nth($blur1, $depth) rgba(0, 0, 0, nth($color1, $depth)),
      0 0 nth($blur2, $depth) rgba(0, 0, 0, nth($color2, $depth));
  }

  display: block;
  //overflow: hidden;
  width: 280px;
  height: 280px;
  position: relative;

  &:focus {
    outline: 0;

    .knob {
      box-shadow: z-depth-all(3);
    }
  }

  &,
  .palette,
  .rotator,
  .selector,
  .ripple,
  .knob {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    box-sizing: border-box;

    &::before {
      box-sizing: border-box;
    }
  }

  .palette {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    border-radius: 50%;
    overflow: hidden;
    will-change: transform, opacity;
    transition: transform 0.5s $material-curve-angular,
      opacity 0.5s $material-curve-angular;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 76%;
      height: 76%;
      top: 12%;
      left: 12%;
      background-color: transparent;
      border-radius: 50%;
    }

    &.is-in {
      transform: scale(0.8);
      opacity: 1;
    }

    &.is-out {
      transform: scale(0);
      opacity: 0;
    }
  }

  .rotator {
    width: 100%;
    height: 100%;
    position: absolute;

    &.dragging {
      z-index: 1;
    }

    &.disabled {
      pointer-events: none;
    }
  }

  .knob {
    box-shadow: z-depth-all(1);
    border-radius: 50%;
    position: absolute;
    width: 7%;
    height: 7%;
    top: 2.5%;
    left: 46.5%;
    background-color: #fff;
    transition: transform 0.4s $material-curve-angular;
    outline: 0;
    border-style: none;

    &.is-in {
      transform: scale(1);
    }

    &.is-out {
      transform: scale(0);
    }
  }

  &:not(:focus) .knob:hover {
    box-shadow: z-depth-all(2);
  }

  .selector {
    position: absolute;
    width: 25%;
    height: 25%;
    top: 37.5%;
    left: 37.5%;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    background-color: $initial-color;
    outline: 0;
    cursor: pointer;
    transition: transform 0.7s $material-curve-angular;
    will-change: transform;
    overflow: visible;
    border: 6px solid #fff;
    box-shadow: 0 0 0 1px $button-border;

    &::-moz-focus-inner {
      border: 0;
    }

    &:hover {
      box-shadow: 0 0 1px 1px #333;
    }

    &:focus {
      box-shadow: 0 0 1px 2px $button-border;
    }

    &.is-pressed {
      animation: color-picker-beat 0.4s $material-curve-angular forwards;
    }
  }

  .color-swatch-list {
    position: relative;
    height: 100%;
    opacity: 0;
    //transform: scale(1) rotateZ(0deg);
    transition: transform 1s $material-curve-angular;
    .color-swatch {
      width: 25px;
      height: 25px;
      display: block;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
      position: absolute;
      transform-origin: center;
      top: 62.5px;
      left: 62.5px;

      transition: transform 0.2s $material-curve-angular;
      transform: translateY(0%);

      &--1 {
        transform: rotateZ(0deg) translateY(350%);
      }
      &--2 {
        transform: rotateZ(72deg) translateY(350%);
      }
      &--3 {
        transform: rotateZ(144deg) translateY(350%);
      }
      &--4 {
        transform: rotateZ(216deg) translateY(350%);
      }
      &--5 {
        transform: rotateZ(288deg) translateY(350%);
      }
    }
    &.is-swatch-in {
      z-index: 0;
      opacity: 1;
      animation: color-swatch-transition-in 1s $material-curve-angular;
    }
    &.is-swatch-out {
      z-index: 0;
      opacity: 0;
      animation: color-swatch-transition-out 1s $material-curve-angular;
    }
  }

  .ripple {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    border: rgba(0, 0, 0, 0.5) solid 8px;
    //opacity: 0;
    position: absolute;
    top: 25%;
    left: 25%;
    z-index: -1;
  }

  .ripple-text {
    opacity: 0;
    width: 100%;
    position: absolute;
    top: 40%;
    left: 0;
    z-index: -1;
    pointer-events: none;
  }

  .is-rippling {
    z-index: 0;
    animation: color-picker-ripple 1s $material-curve-angular forwards;
  }
  .is-rippling-text {
    z-index: 130;
    animation: color-picker-ripple 1s $material-curve-angular forwards;
  }
}

@keyframes color-picker-ripple {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
    border-width: 0;
    transform: scale(3.8);
  }
}

@keyframes color-picker-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes radial-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
  }
}

@keyframes color-swatch-transition-in {
  from {
    transform: scale(0) rotateZ(-30deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }
}
@keyframes color-swatch-transition-out {
  from {
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }
  to {
    transform: scale(0) rotateZ(-30deg);
    opacity: 0;
  }
}
</style>
