import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const activeMenuItem = ref('home')

  const ship = ref({
    loading: false,
    loaded: false,
  })

  const setMenuItemActive = (item) => {
    activeMenuItem.value = item
  }

  const isMenuItemActive = (item) => {
    if (item === activeMenuItem.value) {
      return true
    } else {
      return false
    }
  }

  return { activeMenuItem, ship, setMenuItemActive, isMenuItemActive }
})
