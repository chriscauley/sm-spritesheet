<template>
  <div />
</template>

<script>
import Pickr from '@simonwep/pickr'

export default {
  props: {
    options: Object,
    modelValue: String,
  },
  emits: ['pickr', 'update:modelValue'],
  data() {
    return { pickr: null }
  },
  watch: {
    modelValue(newColor) {
      this.pickr && this.pickr.setColor(newColor)
    },
  },
  mounted() {
    this.pickr = new Pickr({
      el: this.$el,
      default: this.modelValue,
      theme: 'nano',
      components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
        },
      },
      ...this.options,
    })
    window.PICKR = this.pickr
    this.pickr.on('change', (color) => {
      const { defaultRepresentation } = this.pickr.options
      let value
      if (defaultRepresentation === 'HEX') {
        value = color.toHEXA().toString(0)
      } else {
        value = color['to' + defaultRepresentation]().toString(0)
      }
      this.$emit('update:modelValue', value)
    })
    this.pickr.on('clear', () => this.$emit('update:modelValue', null))
    this.$emit('pickr', this.pickr)
  },
}
</script>
