import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import { createPinia } from 'pinia'
import router from './router'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { BootstrapIconsPlugin } from "bootstrap-icons-vue";


const app = createApp(App);
const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
})

app.use(pinia)
    .use(router)
    .use(vuetify)
    .use(BootstrapIconsPlugin)
    .mount('#app');
