import { defineStore } from "pinia";

import {getAllCity} from "@/service"

const useCityStore = defineStore('city',{
    state: () => ({
        allCity:[],
        currentCity:{cityName:'南京'}
    }),
    actions:{
        async fetchAllCityData() {
            const {data} = await getAllCity()
            this.allCity = data
        }
    }
})

export default useCityStore