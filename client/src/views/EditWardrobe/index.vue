<template>
  <div v-if="wardrobe && spritesheet">
    <div>
      {{ spritesheet.display }}
      <div class="spritesheet-actions">
        <i class="fa fa-save" @click="saveSpritesheet" />
        <i class="fa fa-download" @click="savePng" />
      </div>
    </div>
    <div v-for="palette in $store.app.state.palettes" :key="palette.name" class="swatch-list">
      <color-swatch
        v-for="color in palette.colors"
        :key="color.name"
        :color="color"
        :wardrobe="wardrobe"
      />
      <div class="palette-actions">
        <i class="fa fa-download" @click="savePalette(palette)" />
        <label class="fa fa-upload">
          <input
            type="file"
            class="invisible-file-input"
            @change="(e) => loadPalette(e, palette)"
          />
        </label>
        {{ palette.name }}
      </div>
    </div>
    <preview-sprite :spritesheet="spritesheet" :wardrobe="wardrobe" />
    <loading-modal :tasks="tasks" @done="tasks = null" />
  </div>
</template>

<script>
import ColorSwatch from '@/components/ColorSwatch.vue'
import LoadingModal from '@/components/LoadingModal.vue'
import { getOverrides, replaceColors, saveImage } from '@/utils'
import varia from '@/varia'
import PreviewSprite from './PreviewSprite'

export default {
  name: 'EditWardrobe',
  components: { ColorSwatch, LoadingModal, PreviewSprite },
  __route: {
    path: '/app/wardrobe/:wardrobe_id',
  },
  data() {
    return { tasks: [] }
  },
  computed: {
    wardrobe() {
      return this.$store.wardrobe.getOne(this.$route.params.wardrobe_id)
    },
    spritesheet() {
      return this.$store.spritesheet.getOne(this.wardrobe.spritesheet)
    },
  },
  methods: {
    savePng() {
      const { img } = this.$store.app.state
      const { width, height } = img
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      ctx.drawImage(img, 0, 0)
      const { palettes } = this.$store.app.state
      this.tasks = []
      Object.entries(varia.regions).forEach(([region_id, [x, y, width, height]]) => {
        this.tasks.push(() => {
          const image_data = ctx.getImageData(x, y, width, height)
          const overrides = getOverrides(region_id, palettes, 'power-suit', this.wardrobe)
          // TODO actually swapping the colors is very slow and needs to be done server side
          if (overrides.length) {
            replaceColors(image_data, overrides)
            ctx.putImageData(image_data, x, y)
          }
        })
      })
      this.tasks.push(() => {
        varia.drawPalettes(ctx, palettes, this.wardrobe.data)
        saveImage(canvas.toDataURL(), 'out.png')
      })
    },
  },
}
</script>
