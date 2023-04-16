<template>
  <div :style="style">
    <pickr-input v-model="modelValue" :options="options" />
  </div>
</template>

<script>
import { debounce } from 'lodash'

import { resolveColor } from '@/utils'

export default {
  props: {
    color: Object,
    wardrobe: Object,
  },
  computed: {
    modelValue: {
      get() {
        const { palettes } = this.$store.app.state
        const value = resolveColor(this.color, palettes, this.wardrobe.data).slice()
        value[3] = value[3] / 255
        return `rgba(${value.join(',')})`
      },
      // this function is throttled to prevent over-rendering of the preview
      set: debounce(function (value) {
        if (value) {
          value = value.slice(5, -1).split(',').map(Number)
          value[3] = value[3] * 255
        }
        this.$store.wardrobe.overrideColor(this.wardrobe, this.color.id, value)
      }, 100),
    },
    style() {
      const base = this.color.value.slice()
      base[3] = base[3] / 255
      return {
        '--base-color': `rgba(${this.color.value})`,
        '--selected-color': this.modelValue,
      }
    },
    options() {
      return {
        defaultRepresentation: 'RGBA',
        components: {
          preview: true,
          opacity: true,
          hue: true,
          interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            input: true,
            clear: true,
          },
        },
      }
    },
  },
}
</script>
