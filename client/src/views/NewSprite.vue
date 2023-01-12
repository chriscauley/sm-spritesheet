<template>
  <div>
    <input @change="change" type="file" />
    <template v-if="src">
      <img :src="src" @load="imageLoaded" />
      {{ src.length }}
    </template>

  </div>
</template>

<script>
const skips = ['0,0,0,0', '0,0,127,0']
const min_x = 332
const min_y = 142

export default {
  __route: {
    path: '/new-sprite/',
  },
  data() {
    return { src: null }
  },
  methods: {
    change(event) {
      const file = event.target.files?.[0]
      if (!file) {
        return
      }
      var reader = new FileReader();
      reader.onload = () => {
        const url = reader.result;
        file.value = null
        this.src = url
      }
      reader.readAsDataURL(file);
    },
    imageLoaded(event) {
      const start = new Date().valueOf()
      const img = event.target
      const { width, height } = img
      const canvas = document.createElement('canvas')
      document.body.appendChild(canvas)
      canvas.width = width, canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const image_data = ctx.getImageData(0,0,width, height)
      const data = image_data.data
      const size = width * height
      const length = size * 4
      const colors = {}
      for (let i = 0;i < size; i++) {
        const x = i % width
        const y = i / width
        if (x < min_x && y < min_y) {
          continue
        }
        const color = [
          data[i*4],
          data[i*4+1],
          data[i*4+2],
          data[i*4+3],
        ]
        colors[color] = (colors[color]|| 0) + 1
      }
      console.log(colors, new Date().valueOf() - start)
    }
  }
}
</script>
