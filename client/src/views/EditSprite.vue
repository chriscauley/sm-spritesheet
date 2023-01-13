<template>
  <div>
    <div>{{ spritesheet.filename }}</div>
    <div v-for="palette in palettes" :key="palette.name" class="swatch-list">
      <div v-for="color in palette.colors" :key="color.name" :style="css.swatch(color)" />
      <div>{{ palette.name }}</div>
    </div>
    <div class="relative">
      <img ref="img" :src="spritesheet.data_url" @load="imageLoaded" />
      <div v-for="region in regions" :key="region.id" v-bind="region" />
    </div>
  </div>
</template>

<script>
import { extractVariaPalettes, varia_regions } from '@/utils'

const css = {
  swatch: ({ value }) => ({
    width: '32px',
    height: '32px',
    backgroundColor: `rgba(${value})`,
  }),
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
    regions() {
      return Object.entries(varia_regions).map(([name, [left, top, width, height]]) => ({
        style: {
          position: 'absolute',
          background: 'rgba(255, 0, 0, 0.5)',
          top: `${top}px`,
          left: `${left}px`,
          width: `${width}px`,
          height: `${height}px`,
        },
        id: name,
        title: name,
      }))
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
    },
  },
}
</script>
