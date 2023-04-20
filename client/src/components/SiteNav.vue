<template>
  <header :class="css.nav.outer()">
    <section :class="css.nav.section('left')">
      <router-link to="/" :class="css.nav.brand()">Phuntoon</router-link>
    </section>
    <template v-if="$auth.ready">
      <unrest-auth-menu />
    </template>
  </header>
</template>

<script>
import css from '@unrest/css'

export default {
  data() {
    return { css }
  },
}
</script>
