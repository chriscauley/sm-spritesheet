<template>
  <label>
    <input @change="change" type="file" />
    <img v-if="data_url" ref="img" :src="data_url" @load="load" />
  </label>
</template>

<script>
import { startCase } from 'lodash'

import varia from '@/varia'

export default {
  __route: {
    path: '/app/new-sprite',
  },
  data() {
    return { data_url: null, filename: null }
  },
  methods: {
    change(event) {
      const file = event.target.files?.[0]
      if (!file) {
        return
      }
      var reader = new FileReader()
      reader.onload = () => {
        this.filename = file.name
        console.log(this.filename)
        this.data_url = reader.result
      }
      reader.readAsDataURL(file)
    },
    load() {
      const { img } = this.$refs
      const { width, height } = img

      // TODO this should be in a utils file
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const img_data = ctx.getImageData(0, 0, width, height)
      const colors = {}
      const length = img_data.data.length / 4
      for (let i=0;i<length;i++) {
        const color = img_data.data.slice(i*4, (i+1)*4)
        colors[color] = (colors[color] || 0) +1
      }
      varia.skips.forEach(c => {
        console.log(c, colors[c])
        delete colors[c]
      })
      console.log(colors)
    }
  },
}
</script>
