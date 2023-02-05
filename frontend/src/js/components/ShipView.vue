<script setup>
  import { onMounted } from 'vue'
  import { useRouter, onBeforeRouteLeave } from 'vue-router'

  import { useShipStore } from '../stores/ship.js'
  import { useAppStore } from '../stores/app.js'

  const router = useRouter()

  const shipStore = useShipStore()
  const appStore = useAppStore()

  onBeforeRouteLeave((to, from) => {
    appStore.setMenuItemActive(to.name)
  })

  onMounted(() => {})

  const routeHandler = (path, event) => {
    event.preventDefault()
    router.push({
      path: path,
      query: { filter: 1 },
    })
  }

  // reload the ship data when data is not loaded yet
  if (!appStore.ship.loaded) {
    shipStore.reload(shipStore.id)
  }
</script>

<template>
  <div class="uk-position-center">
    <div v-if="appStore.ship.loading" uk-spinner></div>
  </div>

  <div v-if="appStore.ship.loaded">
    <h1>Ship</h1>
    <p>Name: {{ shipStore.ship.name }}</p>
    <button v-on:click="routeHandler('/browser', $event)">
      Test Rout with query
    </button>
  </div>
</template>
