<template>
  <div>
    <div v-if="$auth.ready" :class="css.modal.outer('-relative')">
      <div :class="css.modal.content('-auto')">
        <div class="view-home">
          <h2>Welcome!</h2>
          <template v-if="$auth.user">
            <router-link v-for="route in routes" :key="route.to" :to="route.to">
              {{ route.text }}
            </router-link>
          </template>
          <template v-else>
            <div @click="makeGuest" :class="css.button('block')">Continue as Guest</div>
            <router-link :to="signup" :class="css.button('block')"> Create An Account </router-link>
            <router-link :to="login" :class="css.button('block')"> Log In </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { startCase } from 'lodash'
import css from '@unrest/css'

const prepRoute = (to) => ({
  to,
  text: startCase(to),
})

export default {
  __route: {
    path: '/',
  },
  data() {
    const { query } = this.$route
    return {
      css,
      signup: { path: '/auth/sign-up/', query },
      login: { path: '/auth/login/', query },
      routes: ['/app/wardrobe/new/'].map(prepRoute),
    }
  },
  methods: {
    makeGuest() {
      this.$auth.api
        .post('auth/guest/')
        .then(this.$auth.refetch)
        .then(() => {
          if (this.$route.query.next) {
            this.$router.replace(this.$route.query.next)
          }
        })
    },
  },
}
</script>
