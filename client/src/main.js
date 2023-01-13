import unrest from '@unrest/vue'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@unrest/tailwind/dist.css'
import '@/css/index.css'

const app = createApp(App)
app.use(router).use(store).use(unrest.plugin).mount('#app')
