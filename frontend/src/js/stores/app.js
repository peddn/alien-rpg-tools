import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useAppStore = defineStore('app', () => {

    const errorDisplayTime = 3000

    function removeError(error, errors) {
        const index = errors.value.indexOf(error)
        if(index > -1) {
            errors.value.splice(index, 1)
        }
    }


    const ship = ref({
        loading: false,
        loaded: false
    })

    const errors = ref([])

    const addError = ((error) => {
        setTimeout(removeError, errorDisplayTime, error, errors)
        errors.value.push(error)
    })

    return { addError, ship, errors }

})
