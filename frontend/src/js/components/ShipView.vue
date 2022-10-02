<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useShipStore } from '../stores/ship.js'
import { useAppStore } from '../stores/app.js'

const router = useRouter()

const shipStore = useShipStore()
const appStore = useAppStore()


onMounted(() => {
})

const routeHandler = (path, event) => {
    event.preventDefault()
    router.push({
        path: path,
        query: { filter: 1 }
    })
}

// reload the ship data when data is not loaded yet
if (!appStore.ship.loaded) {
    shipStore.reload(shipStore.id)
}

</script>

<template>
    <div v-if="appStore.ship.loading" class="loading">Loading...</div>
    <div v-if="appStore.ship.loaded">
        <h1 class="title">Ship</h1>
        <p>Name: {{ shipStore.ship.name }}</p>
        <button class="transition ease-in-out hover:scale-125" v-on:click="routeHandler('/browser', $event)">Test Rout
            with query</button><br>
    </div>
</template>
