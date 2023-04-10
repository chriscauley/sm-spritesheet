<template>
  <unrest-modal @close="$emit('update:modelValue', null)">
    <div v-if="!wardrobes">Loading...</div>
    <div v-else>
      <div v-for="wardrobe in wardrobes" :key="wardrobe.id">
        <router-link :to="`/app/wardrobe/${wardrobe.id}`" class="btn -primary">
          Edit Wardrobe #{{ wardrobe.id }}
        </router-link>
      </div>
    </div>
  </unrest-modal>
</template>

<script>
import { getClient } from '@unrest/vue-storage'

export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return { wardrobes: null }
  },
  mounted() {
    const q = { spritesheet__name: this.modelValue }
    this.$store.wardrobe.fetchAll(q).then((wardrobes) => {
      if (wardrobes.length === 0) {
        getClient()
          .get(`new-wardrobe/${this.modelValue}/`)
          .then(({ wardrobe_id }) => {
            this.$router.push(`/app/wardrobe/${wardrobe_id}`)
          })
      } else {
        this.wardrobes = wardrobes
      }
    })
  },
}
</script>
