<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});

const swipeGroup = {};
// 思路一：二次循环
// for(const item of props.swipeData) {
//     swipeGroup[item.enumPictureCategory]= []
// }
// for(const item of props.swipeData) {
//     const valueArray = swipeGroup[item.enumPictureCategory]
//     valueArray.push(item)
// }

// 思路二：一次循环
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}
// console.log(swipeGroup,'swipeGroup');

// 定义转换数据的方法
const getName = (name) => {
  // return name.replace("：","")
  return name.slice(1, -2);
};

const getCategoryIndex = (item) => {
    const valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data => data === item) + 1
}
</script>

<template>
  <div class="detail-swipe">
    <!-- 轮播图 -->
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        class="item"
        v-for="(item, index) in swipeData"
        :key="index"
      >
        <img :src="item.url" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span
              class="item"
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
            <span class="text">{{ getName(value[0].title) }}</span>
            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key ">{{getCategoryIndex(swipeData[active])}}/{{value.length}}</span>
        </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.detail-swipe {
  .swipe-list {
    position: relative;
    .item {
      img {
        width: 100%;
      }
    }
    .indicator {
      display: flex;
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
      .item {
        margin: 0 3px;
        padding: 0 3px;
        border-radius: 5px;

        &.active {
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
