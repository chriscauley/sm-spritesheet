<template>
  <div>
    <input v-model="color" />
    <pickr-input :options="options" v-model="color" @change="change" />
  </div>
</template>

<script>
export default {
  __route: {
    path: '/pickr-test/',
  },
  data() {
    return {
      color: '#FF0000',
      options: {
        defaultRepresentation: 'HEX',
        components: {
          preview: true,
          opacity: true,
          hue: true,
          interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            input: true,
            clear: true,
          },
        },
      },
    }
  },
}
</script>
