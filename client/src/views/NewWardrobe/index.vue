<template>
  <div>
    <wardrobe-picker v-if="selected" v-model="selected" />
    <div class="sprite-card__list">
      <div
        v-for="sprite in sprites"
        :key="sprite.name"
        @click="selected = sprite.name"
        class="sprite-card"
      >
        <img class="sprite-card__image" :src="`${sprite.folder_url}thumbnail.png`" />
        <div class="sprite-card__name">{{ sprite.display }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import WardrobePicker from './WardrobePicker.vue'

export default {
  name: 'NewWardrobe',
  components: { WardrobePicker },
  __route: {
    path: '/app/wardrobe/new',
    meta: { authRequired: true },
  },
  data() {
    return { selected: null }
  },
  computed: {
    sprites() {
      return this.$store.spritesheet.getAll()
    },
  },
}
</script>
