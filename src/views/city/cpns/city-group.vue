<script setup>
import useCityStore from '@/store/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';



const props = defineProps({
  currentGroup: {
    type: Object,
    default: () => ({}),
  }
});

// 动态索引
const indexList = computed(() => {
    const list =  props.currentGroup.cities.map(item => {
     return item.group
    })
    list.unshift('#')
    return list
  })

// 监听城市点击
const router = useRouter()
const cityStore = useCityStore()
const selectCity = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city,index) in currentGroup.hotCities" :key="index">
        <div @click="selectCity(city)" class="city">{{city.cityName}}</div>
      </template>
      </div>
      <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <!-- <h2 class="title">标题：{{ group.group }}</h2> -->
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell @click="selectCity(city)" :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.list {
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    font-size: 12px;
    text-align: center;
    line-height: 28px;
    margin: 5px 0;
  }
}
</style>
