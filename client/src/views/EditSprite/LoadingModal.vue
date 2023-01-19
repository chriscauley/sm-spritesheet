<template>
  <unrest-modal :hide_actions="true" class="loading-modal" v-if="tasks?.length > index">
    Processing...
    {{ index }} / {{ tasks.length }}
  </unrest-modal>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  emits: ['done'],
  data() {
    return { index: 0 }
  },
  watch: {
    tasks: 'reset',
  },
  mounted() {
    this.reset()
  },
  methods: {
    tick() {
      const next = this.tasks?.[this.index]
      if (!next) {
        this.tasks?.length && this.$emit('done')
        return
      }
      setTimeout(() => {
        next()
        this.index++
        this.tick()
      }, 100)
    },
    reset() {
      this.index = 0
      this.tick()
    },
  },
}
</script>
