import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { App } from '@/app'
import router from 'Configs/router'

import 'Configs/styles/index.scss'
import { store } from 'Configs/store/store'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

app.provide('store', store)

app.mount('#app')
