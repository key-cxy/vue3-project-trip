import { defineStore } from "pinia";

import { getHomeHotSuggests,getHomeCategories,getHomeList } from "@/service"

const useHomeStore = defineStore('home',{
    state:() => ({
        hotSuggests:[],
        categories:[],
        currentPage:1,
        homeList:[]
    }),
    actions:{
        async fetchHomeSuggetsData() {
           const {data} = await getHomeHotSuggests()
           this.hotSuggests = data
        },
        async fetchHomeCategoriesData () {
            const {data} = await getHomeCategories()
            this.categories = data
        },
        async fetchHomeListData () {
            const {data} = await getHomeList(this.currentPage)
            this.homeList = [...this.homeList,...data]
            this.currentPage++
        } 
    }
})

export default useHomeStore