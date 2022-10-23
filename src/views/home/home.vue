<script>
export default {
    name:'home'
}
</script>
<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearchBox from "./cpns/home-search-box.vue"
import HomeCategories from "./cpns/home-categories.vue"
import HomeContent from "./cpns/home-content.vue"
import SearchBar from "@/components/search-bar/search-bar.vue"

import useHomeStore from "@/store/modules/home";
import {useScroll} from "@/hooks/useScroll"
import { computed, watch ,ref, onActivated} from "vue";

// 监听window窗口滚动
// const HomeStore = useHomeStore()
// window.addEventListener('scroll',() => {
//     const scrollTop = document.documentElement.scrollTop
//     const clientHeight = document.documentElement.clientHeight
//     const scrollHeight = document.documentElement.scrollHeight
//     console.log((scrollTop + clientHeight) >= scrollHeight);
//     console.log(clientHeight,scrollTop,scrollHeight);
//     if((scrollTop + clientHeight) >= scrollHeight) {
//         HomeStore.fetchHomeListData()
//     }
// })

const HomeStore = useHomeStore()

// 回调函数方法
// useScroll(() => {
//     HomeStore.fetchHomeListData()    
// })
// 变量
const homeRef = ref()
const {isReachBottom,scrollTop} = useScroll(homeRef)
watch(isReachBottom,(newVal) => {
    if(newVal) {
        HomeStore.fetchHomeListData().then(res => {
            isReachBottom.value = false
        }) 
    }
})

const isShowSearchBar = computed(() => {
    return scrollTop.value > 350
})

// 跳转回home时，保留原来位置
onActivated(() => {
    homeRef.value?.scrollTo({
        top:scrollTop.value
    })
}) 


</script>

<template>
    <div class="home" ref="homeRef">
       <home-nav-bar />
       <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
       </div>
       <home-search-box />
       <home-categories />
       <home-content />
       <div v-show="isShowSearchBar" class="search-bar">
        <search-bar />
       </div>
    </div>
</template>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.banner {
    img {
        width: 100%;
    }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>