import { createApp } from 'vue'

import { App } from '@/app'
import router from 'Configs/router'

import 'Configs/styles/index.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
