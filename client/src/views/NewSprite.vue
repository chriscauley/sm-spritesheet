<template>
  <div>
    <input @change="change" type="file" />
    <div class="sprite-card__list">
      <router-link v-for="sprite in sprites" :key="sprite.name" :to="sprite.to" class="sprite-card">
        <img class="sprite-card__image" :src="`${sprite.folder_url}thumbnail.png`" />
        <div class="sprite-card__name">{{ sprite.display }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  __route: {
    path: '/app/new-sprite',
  },
  computed: {
    sprites() {
      return this.$store.spritesheet.getAll()
    },
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
