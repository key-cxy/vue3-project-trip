import { defineStore } from "pinia";
import { getHouseDetail } from "@/service";

const useDetailStore = defineStore('detail',{
    state:() => ({
        houseInfo:{}
    }),
    actions:{
        async fetchHouseDetailData(houseId) {
            const {data} = await getHouseDetail(houseId)
            this.houseInfo = data
        }
    },
    getters:{
        mainPart() {
            return this.houseInfo.mainPart
        }
    }
})

export default useDetailStore