<script setup>
import cityGroup from "./cpns/city-group.vue"
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 从store获取数据
const cityStore = useCityStore();
cityStore.fetchAllCityData();
const { allCity } = storeToRefs(cityStore);

// 搜索功能
const searchValue = ref("");
const onCancel = () => {
  searchValue.value = "";
  router.back();
};

// tab
const currentTab = ref();
const changeTab = (key) => {
  currentTab.value = key
};

// 获取选中标签的值
const  currentGroup = computed(() => {
    return allCity.value[currentTab.value]
})

</script>

<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索 -->
      <van-search
        v-model="searchValue"
        @cancel="onCancel"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
      />
      <!-- tab -->
      <van-tabs
        v-model:active="currentTab"
        @change="changeTab"
        color="#ff9854"
        line-height="2"
      >
        <van-tab
          v-for="(item,key, index) in allCity"
          :key="index"
          :title="item.title"
          :name="key"
        ></van-tab>
      </van-tabs>
    </div>
    <div class="content">
        <template v-for="(value,key,index) in allCity" :key="index">
            <city-group v-show="currentTab === key" :currentGroup="value" />
        </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  // --van-tab-line-height:30px !important;

  //  固定定位，不推荐
  //  .top{
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //   }

  //   .content {
  //     margin-top: 98px;
  //   }

 
 // 布局滚动
 .top {
    position: relative;
    z-index:9;
 }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
