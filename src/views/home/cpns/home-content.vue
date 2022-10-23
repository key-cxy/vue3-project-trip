<script setup>
import { useRouter } from "vue-router";

import houseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import houseItemV9 from "@/components/house-item-v9/house-item-v9.vue";

import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();

const getHomeData = () => {
  homeStore.fetchHomeListData();
};
getHomeData();
const { homeList } = storeToRefs(homeStore);

// 点击
const router = useRouter();
const itemClick = (item) => {
  router.push(`/detail/${item.houseId}`)
};
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in homeList" :key="item.data.houseId">
        <house-item-v3
          @click="itemClick(item.data)"
          :item-data="item.data"
          v-if="item.discoveryContentType === 3"
        />
        <house-item-v9
          @click="itemClick(item.data)"
          :item-data="item.data"
          v-if="item.discoveryContentType === 9"
        />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 8px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
