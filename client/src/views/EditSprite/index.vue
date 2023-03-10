<template>
  <div>
    <div>
      {{ spritesheet.filename }}
      <div class="spritesheet-actions">
        <i class="fa fa-save" @click="saveSpritesheet" />
        <i class="fa fa-download" @click="savePng" />
      </div>
    </div>
    <div v-for="palette in $store.app.state.palettes" :key="palette.name" class="swatch-list">
      <color-swatch v-for="color in palette.colors" :key="color.name" :color="color" />
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
    <preview-sprite />
    <loading-modal :tasks="tasks" @done="tasks = null" />
  </div>
</template>

<script>
import ColorSwatch from '@/components/ColorSwatch.vue'
import { saveFile, saveImage, replaceColors } from '@/utils'
import varia from '@/varia'

import PreviewSprite from './PreviewSprite.vue'
import LoadingModal from './LoadingModal.vue'

const css = {
  swatch: ({ value }) => ({
    width: '32px',
    height: '32px',
    backgroundColor: `rgba(${value})`,
  }),
}

export default {
  name: 'EditSprite',
  __route: { path: '/edit-sprite/' },
  components: { ColorSwatch, LoadingModal, PreviewSprite },
  data() {
    return { css, ready: null, tasks: null }
  },
  computed: {
    spritesheet() {
      return this.$store.local.state
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
          const overrides = this.$store.local.getOverrides(region_id, palettes, this.selected_suit)
          // TODO actually swapping the colors is very slow and needs to be done server side
          replaceColors(image_data, overrides)
          ctx.putImageData(image_data, x, y)
        })
      })
      this.tasks.push(() => {
        varia.drawPalettes(ctx, palettes, this.$store.local.state.overrides)
        saveImage(canvas.toDataURL(), 'out.png')
      })
    },
    saveSpritesheet() {
      const name = this.spritesheet.filename.replace(/png$/, 'json')
      saveFile(JSON.stringify(this.$store.local.state, null, 2), name)
    },
    savePalette(palette) {
      let filename = window.prompt('Enter Filename')
      if (filename) {
        if (!filename.endsWith('json')) {
          filename += '.json'
        }
        const { palettes } = this.$store.app.state
        const colors = palette.colors.map((c) => this.$store.local.resolveColor(c, palettes))
        saveFile(colors, filename)
      }
    },
    loadPalette(event, palette) {
      const file = event.target.files?.[0]
      if (!file) {
        return
      }
      var reader = new FileReader()
      reader.onload = () => {
        const new_palette = JSON.parse(reader.result)
        // TODO copypasta from ColorSwatch.vue
        const { overrides } = this.$store.local.state
        palette.colors.forEach((color, index) => {
          overrides[color.id] = new_palette[index]
        })
        this.$store.local.save(overrides)
      }
      reader.readAsText(file)
    },
  },
}
</script>
