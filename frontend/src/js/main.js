import '../css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './components/App.vue'
import Home from './components/HomeView.vue'
import Ship from './components/ShipView.vue'
import Browser from './components/BrowserView.vue'

const pinia = createPinia()

const routes = [
    {
        path: '/',
        component: Home,
    },
    
    { path: '/ship', component: Ship },
    { path: '/browser', component: Browser },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
