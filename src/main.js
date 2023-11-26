import App from './App.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'


import '../node_modules/bootstrap/scss/bootstrap.scss'
import './assets/scss/_style.scss';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(mdiVue, {
    icons: mdijs
})
app.mount('#app')
