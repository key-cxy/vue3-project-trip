<script setup>
import tabbarList from "@/assets/data/tabbar";

import { getAssetUrl } from "@/utils/getAssetUrl";

import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const currentIndex = ref(0);
const toggleTab = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="tab-bar">
    <van-tabbar
      v-model="currentIndex"
      @change="toggleTab"
      route
      active-color="#ff9864"
    >
      <template v-for="(item, index) in tabbarList" :key="item.path">
        <van-tabbar-item class="tabbar-item" :to="item.path" icon="home-o">
          <span class="text">{{ item.text }}</span>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetUrl(item.img)"
              alt=""
            />
            <img v-else :src="getAssetUrl(item.activeImg)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  // 局部定义一个变量：只针对tab-bar子元素才生效
  // --van-tabbar-item-icon-size:30px !important;

  // 找到类，对类中的css属性重写
  :deep(.van-tabbar-item__icon) {
    font-size: 30px !important;
  }

  img {
    height: 26px;
  }
}
</style>
