<script setup>
  import { computed } from 'vue'
  import { onBeforeRouteLeave, useRoute } from 'vue-router'

  import { useAppStore } from '../stores/app.js'

  const route = useRoute()

  const appStore = useAppStore()

  onBeforeRouteLeave((to, from) => {
    appStore.setMenuItemActive(to.name)
  })

  const filter = computed(() => {
    if (!route.query.filter) {
      return 0
    }
    return route.query.filter
  })
</script>

<template>
  <h1>Module Browser</h1>
  <p>Filter</p>
  <p>{{ filter }}</p>
</template>
