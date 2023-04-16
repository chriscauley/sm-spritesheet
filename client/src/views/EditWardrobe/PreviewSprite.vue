<template>
  <div v-if="ready && selected_region" class="preview-sprite">
    <div v-if="suits" class="btn-group">
      <button
        v-for="suit in suits"
        :key="suit"
        :class="css.suit(suit)"
        @click="selected_suit = suit"
      >
        {{ suit }}
      </button>
    </div>
    <div class="flex gap-2 mb-4">
      {{ selected_region.id }}
      <div @click="selectRegion(null)" class="link">back</div>
    </div>
    <img :src="region_src" class="-full" />
  </div>
  <div v-show="!selected_region" class="relative">
    <img
      class="-no-max-width"
      ref="img"
      :src="`${spritesheet.folder_url}spritesheet.png`"
      @load="imageLoaded"
    />
    <div v-for="region in regions" :key="region.id" v-bind="region" @click="selectRegion(region)" />
  </div>
</template>

<script>
import { replaceColors, getOverrides } from '@/utils'
import varia from '@/varia'

export default {
  props: {
    spritesheet: Object,
    wardrobe: Object,
  },
  data() {
    const css = {
      suit: (name) => `btn -${this.selected_suit === name ? 'primary' : 'secondary'}`,
    }
    return { ready: false, selected_suit: 'power-suit', css, selected_region: null }
  },
  computed: {
    suits() {
      const { selected_region } = this
      if (!selected_region || varia.special_regions[selected_region]) {
        return null
      }
      return ['power-suit', 'varia-suit', 'gravity-suit']
    },
    regions() {
      return Object.entries(varia.regions).map(([name, [left, top, width, height]]) => ({
        class: 'preview-sprite__region',
        style: {
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

      const image_data = ctx.getImageData(0, 0, width, height)
      const { palettes } = this.$store.app.state
      const { id } = this.selected_region
      const overrides = getOverrides(id, palettes, this.selected_suit, this.wardrobe)
      replaceColors(image_data, overrides)
      ctx.putImageData(image_data, 0, 0)

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
      this.$store.app.state.palettes = varia.extractPalettes(ctx)
      this.$store.app.state.img = this.$refs.img
      this.ready = true
    },
    selectRegion(region) {
      this.selected_region = region
    },
  },
}
</script>
