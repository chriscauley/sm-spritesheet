import unrest from '@unrest/vue'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'

import '@unrest/tailwind/dist.css'
import '@/assets/tailwind.css'

const app = createApp(App)
app.use(router).use(unrest.plugin).mount('#app')
