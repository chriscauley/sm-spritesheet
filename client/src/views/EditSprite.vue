<template>
  <div>
    <div>{{ spritesheet.filename }}</div>
    <div v-for="palette in palettes" :key="palette.name" class="swatch-list">
      <unrest-dropdown v-for="color in palette.colors" :key="color.name">
        <div :style="css.swatch(color)" :title="color.name" class="swatch-list__swatch">
          <i v-if="color.locked" class="fa fa-lock" />
        </div>
        <template #content>
          <div class="dropdown-items">
            {{ color.name }}
          </div>
        </template>
      </unrest-dropdown>
      <div>{{ palette.name }}</div>
    </div>
    <div v-if="selected_region">
      <div class="flex gap-2 mb-4">
        {{ selected_region.id }}
        <div @click="selected_region = null" class="link">back</div>
      </div>
      <img :src="region_src" />
    </div>
    <div v-show="!selected_region" class="relative">
      <img ref="img" :src="spritesheet.data_url" @load="imageLoaded" />
      <div
        v-for="region in regions"
        :key="region.id"
        v-bind="region"
        @click="selected_region = region"
      />
    </div>
  </div>
</template>

<script>
import varia from '@/varia'

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
    return { palettes: null, css, selected_region: null }
  },
  computed: {
    spritesheet() {
      return this.$store.local.state
    },
    regions() {
      return Object.entries(varia.regions).map(([name, [left, top, width, height]]) => ({
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
    region_src() {
      const [x, y, width, height] = varia.regions[this.selected_region.id]
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(this.$refs.img, -x, -y)
      return canvas.toDataURL()
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
      this.palettes = varia.extractPalettes(ctx)
    },
    clickRegion(region) {
      this.selected_region = region
    },
  },
}
</script>
