<template>
  <div>
    <router-link v-for="route in routes" :key="route.to" :to="route.to">
      {{ route.text }}
    </router-link>
  </div>
</template>

<script>
import { startCase } from 'lodash'

const prepRoute = (to) => ({
  to,
  text: startCase(to),
})

export default {
  __route: {
    path: '/',
  },
  data() {
    return {
      routes: ['/new-sprite/'].map(prepRoute),
    }
  },
}
</script>
