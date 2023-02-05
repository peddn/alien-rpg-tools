<script setup>
  import { useAppStore } from '../stores/app.js'
  const appStore = useAppStore()

  // watch the state for new errors and display them
  // eslint-disable-next-line no-unused-vars
  appStore.$subscribe((mutation, state) => {})
</script>

<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav uk-margin-left">
        <li v-bind:class="{ 'uk-active': appStore.isMenuItemActive('home') }">
          <router-link to="/" class="btn-blue">Home</router-link>
        </li>
        <li v-bind:class="{ 'uk-active': appStore.isMenuItemActive('ship') }">
          <router-link to="/ship" class="btn-blue">Ship</router-link>
        </li>
        <li
          v-bind:class="{ 'uk-active': appStore.isMenuItemActive('browser') }"
        >
          <router-link to="/browser" class="btn-blue"
            >Module Browser</router-link
          >
        </li>
      </ul>
    </div>
  </nav>

  <div>
    <router-view></router-view>
  </div>
</template>
