<script setup>
import { useAppStore } from '../stores/app.js'
const appStore = useAppStore()


// watch the state for new errors and display them
// eslint-disable-next-line no-unused-vars
appStore.$subscribe((mutation, state) => {
})

const hideError = (id) => {
    const errorDiv = document.getElementById('error_' + id)
    errorDiv.classList.add('hidden')
}

</script>

<template>
    <div>
        <router-link to="/" class="btn-blue">Home</router-link>
        <router-link to="/ship" class="btn-blue">Ship</router-link>
        <router-link to="/browser" class="btn-blue">Module Browser</router-link>
    </div>

    <div>
        <router-view></router-view>
    </div>

    <div class="absolute top-5 right-5 w-96">
        <div v-for="(error, index) in appStore.errors" v-bind:key="index" v-bind:id="'error_' + index"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative" role="alert">
            <strong class="font-bold">{{ error.name }}</strong>
            <span class="block">{{ error.message }}</span>
            <span class="absolute top-1 right-1">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" v-on:click="hideError(index)">
                    <title>Close</title>
                    <path
                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>
        </div>
    </div>

</template>
