<template>
  <div :style="style">
    <pickr-input v-model="modelValue" :options="options" />
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  props: {
    color: Object,
  },
  computed: {
    modelValue: {
      get() {
        const { palettes } = this.$store.app.state
        const value = this.$store.local.resolveColor(this.color, palettes).slice()
        value[3] = value[3] / 255
        return `rgba(${value.join(',')})`
      },
      // this function is throttled to prevent over-rendering of the preview
      set: debounce(function (value) {
        if (value) {
          value = value.slice(5, -1).split(',').map(Number)
          value[3] = value[3] * 255
        }
        const { overrides } = this.$store.local.state
        overrides[this.color.id] = value
        this.$store.local.save(overrides)
      }, 100),
    },
    style() {
      const { value } = this.color
      const { palettes } = this.$store.app.state
      const override = this.$store.local.resolveColor(this.color, palettes)
      return {
        '--base-color': `rgba(${value})`,
        '--selected-color': `rgba(${override})`,
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
