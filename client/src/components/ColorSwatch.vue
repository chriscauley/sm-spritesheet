<template>
  <unrest-dropdown>
    <div :style="style" :title="color.name" class="swatch-list__swatch">
      <i v-if="color.locked" class="fa fa-lock" />
    </div>
    <template #content>
      <div class="dropdown-items p-2" @click.stop>
        {{ color.palette }} #{{ color.index }}
        <div v-if="lockable">lockable</div>
        <input type="color" :value="override_hex" @change="changeColor" />
        <button v-if="can_clear" @click="clear" class="btn -danger">clear</button>
      </div>
    </template>
  </unrest-dropdown>
</template>

<script>
export default {
  props: {
    color: Object,
    palettes: Array,
  },
  computed: {
    can_clear() {
      const { locked, value } = this.color
      return !locked && this.override.toString() !== value.toString()
    },
    override() {
      return this.$store.local.resolveColor(this.color, this.palettes)
    },
    override_hex() {
      return (
        '#' +
        this.override
          .slice(0, 3)
          .map((i) => i.toString(16).padStart(2, '0'))
          .join('')
      )
    },
    lockable() {
      return ['varia-suit', 'gravity-suit', 'death'].includes(this.color.palette)
    },
    style() {
      const { value } = this.color
      const { override } = this
      return {
        backgroundImage: `linear-gradient(135deg, rgba(${value}) 50%, rgba(${override}) 50%)`,
      }
    },
  },
  methods: {
    changeColor(e) {
      const value = e.target.value.slice(1)
      const color = [0, 1, 2].map((i) => parseInt(value.slice(i * 2, (i + 1) * 2), 16))
      color.push(255)
      this.save(color)
      document.body.click() // remove focus
    },
    save(value) {
      // TODO move to storage
      const { overrides } = this.$store.local.state
      overrides[this.color.id] = value
      this.$store.local.save(overrides)
    },
    clear() {
      this.save(null)
    },
  },
}
</script>
