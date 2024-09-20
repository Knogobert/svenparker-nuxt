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

    <!-- <ul
      v-if="false"
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
            // hsla(349, 63%, 49%, 1)
            // hsla(16, 63%, 49%, 1)
            // hsla(56, 63%, 49%, 1)
            // hsla(145, 63%, 49%, 1)
            // hsla(185, 63%, 49%, 1)->
    </ul> -->

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

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import fillColorWheel from '@radial-color-picker/color-wheel'
import Rotator from '@radial-color-picker/rotator'

const props = defineProps({
  value: {
    type: Object,
    default: () => ({
      hue: 349,
      saturation: 63,
      luminosity: 49,
      alpha: 1
    })
  },
  step: {
    type: Number,
    default: 2
  },
  mouseScroll: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['input', 'select'])

const colorValue = ref(props.value)

const intervalPointer = ref(null)
const isDisabled = ref(true)
const isDragging = ref(false)
const isKnobIn = ref(false)
const isPaletteIn = ref(false)
const isPressed = ref(false)
const isRippling = ref(false)
const isRipplingText = ref(0)
const isSwatchesIn = ref(0)
const isToggling = ref(false)
const colorChoice = ref([
  'hsla(223, 63%, 49%, 1)',
  'hsla(349, 63%, 49%, 1)',
  'hsla(16, 63%, 49%, 1)',
  'hsla(56, 63%, 49%, 1)',
  'hsla(145, 63%, 49%, 1)',
  'hsla(158, 63%, 49%, 1)'
])

const palette = ref(null)
const rotator = ref(null)
let rotatorInstance = null

const color = computed(() => {
  let { hue, saturation = 100, luminosity = 50, alpha = 1 } = colorValue.value
  return `hsla(${hue}, ${saturation}%, ${luminosity}%, ${alpha})`
})

const throttledUpdateThemeColor = useThrottleFn(() => {
  localStorage.setItem(
    'themeColor',
    JSON.stringify({
      color: color.value,
      values: colorValue.value
    })
  )
}, 40, { leading: true, trailing: true })

const onScroll = (ev) => {
  if (isDisabled.value) return

  ev.preventDefault()

  if (ev.deltaY > 0) {
    rotatorInstance.angle += props.step
  } else {
    rotatorInstance.angle -= props.step
  }
}

const rotate = (ev, isIncrementing) => {
  if (isDisabled.value) return

  let multiplier = isIncrementing ? 1 : -1

  if (ev.ctrlKey) {
    multiplier *= 6
  } else if (ev.shiftKey) {
    multiplier *= 3
  }

  rotatorInstance.angle += props.step * multiplier
}

const updateColor = (hue) => {
  // Round the hue to the nearest 0.25 degree (1440 colors in 360 degrees)
  const roundedHue = Math.round(hue * 4) / 4;

  console.log('hue:', roundedHue)
  colorValue.value.hue = roundedHue
  emit('input', {
    hue: roundedHue,
    saturation: colorValue.value.saturation || 100,
    luminosity: colorValue.value.luminosity || 50,
    alpha: colorValue.value.alpha || 1
  })
  rotatorInstance.angle = roundedHue
  document.documentElement.style.setProperty('--theme-color', color.value) // 2. During
  throttledUpdateThemeColor()
}

const rotateToMouse = (ev) => {
  if (isDisabled.value) return
  rotatorInstance.setAngleFromEvent(ev)
}

const selectColor = () => {
  isToggling.value = true
  isPressed.value = true

  if (!isDisabled.value) {
    emit('select', colorValue.value)
    isRippling.value = true
    isRipplingText.value++
    isSwatchesIn.value = 0
  } else {
    isPaletteIn.value = true
    isSwatchesIn.value++
  }
}

const togglePicker = () => {
  callAttention(false)

  if (isDisabled.value) {
    isKnobIn.value = true
  } else {
    isKnobIn.value = false
  }

  isPressed.value = false
}

const hidePalette = () => {
  if (!isDisabled.value) {
    isPaletteIn.value = false
  } else {
    isDisabled.value = false
  }
}

const callAttention = (keepRipples = true) => {
  if (keepRipples === false) {
    return clearInterval(intervalPointer.value)
  }

  intervalPointer.value = setInterval(() => {
    isRippling.value = true
  }, 10000)
}

const stopRipple = () => {
  isRippling.value = false
}

const toggleKnob = (ev) => {
  // 'transitionend' fires for every transitioned property
  if (ev.propertyName === 'transform') {
    if (isDisabled.value) {
      isKnobIn.value = true
    } else {
      isDisabled.value = true
    }
  }
  isToggling.value = false
}

const handleWindowResize = () => {
  rotatorInstance.destroy()

  fillColorWheel(palette.value, rotator.value.offsetWidth || 280)

  rotatorInstance = new Rotator(rotator.value, {
    inertia: 0.7,
    angle: colorValue.value.hue,
    onRotate: updateColor,
    onDragStart: () => {
      isDragging.value = true
    },
    onDragStop: () => {
      isDragging.value = false
    }
  })
}

onMounted(() => {
  if (props.mouseScroll) {
    rotator.value.addEventListener('wheel', onScroll)
  }

  fillColorWheel(palette.value, rotator.value.offsetWidth || 280)

  rotatorInstance = new Rotator(rotator.value, {
    inertia: 0.7,
    angle: colorValue.value.hue,
    onRotate: updateColor,
    onDragStart: () => {
      isDragging.value = true
    },
    onDragStop: () => {
      isDragging.value = false
    }
  })

  if (import.meta.client) window.addEventListener('resize', handleWindowResize)

  callAttention()

  if (localStorage.themeColor) {
    let ls = JSON.parse(localStorage.themeColor)
    colorValue.value = ls.values
    updateColor(ls.values.hue)
    console.log('Initial color set from localStorage:', colorValue.value)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) window.removeEventListener('resize', handleWindowResize)
  rotatorInstance.destroy()
  rotatorInstance = null
})
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
    transition: transform 0.7s $material-curve-angular,
                background-color 100ms ease-in;
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
