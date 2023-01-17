<template>
  <div v-if="ready && selected_region">
    <div v-if="suits" class="btn-group">
      <button v-for="suit in suits" :key="suit" :class="css.suit(suit)" @click="selected_suit=suit">
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
    <img ref="img" :src="spritesheet.data_url" @load="imageLoaded" />
    <div v-for="region in regions" :key="region.id" v-bind="region" @click="selectRegion(region)" />
  </div>
</template>

<script>
import varia from '@/varia'

const getPixelMap = (image_data) => {
  const pixel_map = {}
  for (let i = 0; i < image_data.data.length; i++) {
    const color = image_data.data.slice(i * 4, (i + 1) * 4)
    const hash = color.toString()
    if (!pixel_map[hash]) {
      pixel_map[hash] = []
    }
    pixel_map[hash].push(i)
  }
  return pixel_map
}

export default {
  data() {
    const css = {
      suit: name => `btn -${this.selected_suit === name ? "primary" : "secondary"}`
    }
    return { ready: false, selected_suit: 'power-suit', css }
  },
  computed: {
    suits() {
      const { selected_region } = this
      if (!selected_region || varia.special_regions[selected_region]) {
        return null
      }
      return ['power-suit', 'varia-suit', 'gravity-suit']
    },
    selected_region() {
      return this.$store.local.state.selected_region
    },
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
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(this.$refs.img, -x, -y)

      const image_data = ctx.getImageData(0, 0, width, height)
      const pixel_map = getPixelMap(image_data)
      const { palettes } = this.$store.app.state
      const { id } = this.selected_region
      const overrides = this.$store.local.getOverrides(id, palettes, this.selected_suit)
      console.log(overrides)
      overrides.forEach(([color1, color2]) => {
        pixel_map[color1]?.forEach((index) => {
          image_data.data[4 * index] = color2[0]
          image_data.data[4 * index + 1] = color2[1]
          image_data.data[4 * index + 2] = color2[2]
          image_data.data[4 * index + 3] = color2[3]
        })
      })
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
      this.ready = true
    },
    selectRegion(region) {
      this.$store.local.save({ selected_region: region })
    },
  },
}
</script>
