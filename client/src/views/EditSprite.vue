<template>
  <div>
    <div>{{ spritesheet.filename }}</div>
    <div v-for="palette in palettes" :key="palette.name" class="swatch-list">
      <div v-for="color in palette.colors" :key="color.name" :style="css.swatch(color)" />
      <div>{{ palette.name }}</div>
    </div>
    <img ref="img" :src="spritesheet.data_url" @load="imageLoaded" />
  </div>
</template>

<script>
import { extractVariaPalettes } from '@/utils'

const css = {
  swatch: ({ value }) => ({
    width: "32px",
    height: "32px",
    backgroundColor: console.log(value) || `rgba(${value})`,
  })
}

export default {
  __route: { path: '/edit-sprite/' },
  data() {
    return { palettes: null, css }
  },
  computed: {
    spritesheet() {
      return this.$store.local.state
    },
  },
  methods: {
    imageLoaded() {
      const canvas = document.createElement('canvas')
      const { width, height } = this.$refs.img
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(this.$refs.img, 0, 0)
      this.palettes = extractVariaPalettes(ctx)
      console.log(this.palettes)
    }
  }
}
</script>