import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useAppStore } from './app.js'

export const useShipStore = defineStore('ship', () => {
    const endpoint = 'ships/'
    const populate = 'populate[attrs]=*&populate[systems][populate]=*&populate[moduleCapacities]=*&populate[modules]=*'
    const bearer   = 'b7e41ab2d56c288b002bee53ebada137e07bf2ccc810bfc04e7963e7a894ffa21f8d1fb6e725780657c756f646fdf62d5a75946fa5d160afd353e7460a10007001260a462b19dafbd84ac2acf3e7279a6b65e5a1a30216dd6593798dd5096fc5e7fbd4ddede6a940b86a4c6a6131f6987aef507e2f4b57a9864b0014ac2911df'
    
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
            console.log(error.message)
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
