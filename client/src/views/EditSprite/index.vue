<template>
  <div>
    <div>
      {{ spritesheet.filename }}
      <div class="spritesheet-actions">
        <i class="fa fa-save" @click="saveSpritesheet" />
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
  </div>
</template>

<script>
import ColorSwatch from '@/components/ColorSwatch.vue'
import { saveFile } from '@/utils'

import PreviewSprite from './PreviewSprite.vue'

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
  components: { ColorSwatch, PreviewSprite },
  data() {
    return { css, ready: null }
  },
  computed: {
    spritesheet() {
      return this.$store.local.state
    },
  },
  methods: {
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
