<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

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
