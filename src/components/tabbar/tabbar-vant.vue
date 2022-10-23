<script setup>
import tabbarList from "@/assets/data/tabbar";

import { getAssetUrl } from "@/utils/getAssetUrl";

import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const currentIndex = ref(0);
watch(route,(newVal) => {
  const index = tabbarList.findIndex(item => item.path === newVal.path)
  if(index === -1) return 
  currentIndex.value = index
})
</script>

<template>
  <div class="tab-bar">
    <van-tabbar
      v-model="currentIndex"
      route
      active-color="#ff9864"
    >
      <template v-for="(item, index) in tabbarList" :key="item.path">
        <van-tabbar-item class="tabbar-item" :to="item.path" icon="home-o">
          <template #default>
            <span class="text">{{ item.text }}</span>
          </template>
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
  // 局部定义一个变量: 只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px !important;

  // 找到类, 对类中的CSS属性重写
  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }

  img {
    height: 26px;
  }
}
</style>
