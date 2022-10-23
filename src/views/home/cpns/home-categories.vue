<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

    const homeStore = useHomeStore()
    homeStore.fetchHomeCategoriesData()
    const { categories } = storeToRefs(homeStore)
</script>

<template>
    <div class="categories">
        <template v-for="item in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <div class="title">{{item.title}}</div>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.categories {
    display: flex;
    overflow-x: auto;
    height: 80px;
    padding: 0 10px;
    margin-top: 8px;

    &::-webkit-scrollbar {
        display: none;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70px;
        flex-shrink: 0;

        img {
            height: 32px;
            width: 32px;
        }

        .title {
            font-size: 12px;
            margin-top: 8px;
        }
    }
}
</style>