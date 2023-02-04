import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useAppStore } from './app.js'

export const useShipStore = defineStore('ship', () => {
    const endpoint = 'ships/'
    const populate = 'populate[attrs]=*&populate[systems][populate]=*&populate[moduleCapacities]=*&populate[modules]=*'
    const bearer   = process.env.BEARER
    
    const id = ref(1)
    const ship = ref(null)

    const reload = async (id) => {
        const appStore = useAppStore()
        appStore.ship.loading = true
        appStore.ship.loaded = false
        try {
            const response = await fetch(
                // eslint-disable-next-line no-undef
                process.env.BASE_URL + endpoint + id + '?' + populate,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + bearer
                    },
                })
                .then((response) => {
                    return response.json()
                })
            ship.value = response.data.attributes
            appStore.ship.loaded = true
            appStore.ship.loading = false
        } catch(error) {
            if(error.message === 'response.data is null') {
                error.name    = 'Keine Daten vorhanden.'
                error.message = 'Es liegen keine Daten zur Anzeige vor.' 
            }
            appStore.addError(error)
            ship.value = null
            appStore.ship.loaded = false
            appStore.ship.loading = false
        }
    }
    return { reload, id, ship }
})
