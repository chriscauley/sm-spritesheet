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
      var reader = new FileReader()
      reader.onload = () => {
        const filename = file.name
        const data_url = reader.result
        this.$store.local.save({ filename, data_url })
        this.$router.push('/edit-sprite/')
      }
      reader.readAsDataURL(file)
    },
  },
}
</script>
