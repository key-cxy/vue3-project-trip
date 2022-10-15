<script setup>
import tabbarList from "@/assets/data/tabbar"

import {getAssetUrl} from "@/utils/getAssetUrl"

import { useRouter } from "vue-router"
import {ref} from "vue"

const router = useRouter()
const currentIndex = ref(0)
const toggleTab = (item,index) => {
    currentIndex.value = index
    router.push({ path: item.path })
}


</script>

<template>
    <div class="tabbar">
        <div class="tabbar-item" :class="{active:currentIndex === index}" @click="toggleTab(item,index)" v-for="(item,index) in tabbarList" :key="index">
            <img v-if="currentIndex !== index" :src="getAssetUrl(item.img)" alt="">
            <img v-else :src="getAssetUrl(item.activeImg)" alt="">
            <span class="text">{{item.text}}</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    display: flex;
    border-top: 1px solid #eee;

    .tabbar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.active {
            color: var(--primary-color);
        }

        .text {
            font-size: 12px;
            margin-top: 2px;
        }

        img {
            width: 36px;
        }
    }

}
</style>