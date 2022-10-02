
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useAppStore } from './app.js'

export const useShipStore = defineStore('ship', () => {
    const endpoint = 'ships/'
    const populate = 'populate[attrs]=*&populate[systems][populate]=*&populate[moduleCapacities]=*&populate[modules]=*'
    const bearer   = 'd75f7228abb51332e08e12dbd53786cfec816b9966e432a0fcb63c982f1c50a7f3173689359c43b28a089440bb19116e67247ad3221701f595e63a8a46d58973582935d7aa41e9aaec4c60db7ec80178e2a982f33d995c45aaa36a418200a1fcf49f789c4dd1714489003d7b8c5d046288fee84f2b2c97e0d8c535e8cb57c651'
    
    const id = ref(1)
    const ship = ref(null)

    const reload = async (id) => {
        const appStore = useAppStore()
        appStore.ship.loading = true
        appStore.ship.loaded = false
        try {
            const response = await fetch(
                // eslint-disable-next-line no-undef
                BASE_URL + endpoint + id + '?' + populate,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + bearer
                    },
                })
                .then((response) => response.json())
            ship.value = response.data.attributes
            appStore.ship.loaded = true
            appStore.ship.loading = false
        } catch(error) {
            appStore.addError(error)
            ship.value = null
            appStore.ship.loaded = false
            appStore.ship.loading = false
        }
    }
    return { reload, id, ship }
})
