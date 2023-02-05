import '../scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import App from './components/App.vue'
import Home from './components/HomeView.vue'
import Ship from './components/ShipView.vue'
import Browser from './components/BrowserView.vue'

const pinia = createPinia()

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/ship',
    name: 'ship',
    component: Ship,
  },
  {
    path: '/browser',
    name: 'browser',
    component: Browser,
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// loads the Icon plugin
UIkit.use(Icons)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
