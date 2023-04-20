import unrest from '@unrest/vue'
import auth from '@unrest/vue-auth'
import form from '@unrest/vue-form'
import { createApp } from 'vue'

import PickrInput from '@/components/PickrInput.vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@simonwep/pickr/dist/themes/nano.min.css'
import '@unrest/tailwind/dist.css'
import '@/css/index.css'

const app = createApp(App)

auth.configure({
  AUTH_START: '/',
  oauth_providers: ['twitch'],
  enabled: !process.env.VUE_APP_OFFLINE,
})

app
  .use(router)
  .use(store)
  .use(form)
  .use(unrest.plugin)
  .use(auth.plugin)
  .component('PickrInput', PickrInput)
  .mount('#app')
