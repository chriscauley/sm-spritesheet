import unrest from '@unrest/vue'
import { createApp } from 'vue'

import PickrInput from '@/components/PickrInput.vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@simonwep/pickr/dist/themes/nano.min.css'
import '@unrest/tailwind/dist.css'
import '@/css/index.css'

const app = createApp(App)
app.use(router).use(store).use(unrest.plugin).component('PickrInput', PickrInput).mount('#app')
