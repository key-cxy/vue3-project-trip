<script setup>
import { computed, ref, watch } from "vue";

import { useRoute, useRouter } from "vue-router";

import { storeToRefs } from "pinia";
import useDetailStore from "@/store/modules/detail";

import { useScroll } from "@/hooks/useScroll";

import DetailSwipe from "./cpns/detail_01-swipe.vue";
import DetailInfo from "./cpns/detail_02-info.vue";
import DetailFacility from "./cpns/detail_03-facility.vue";
import DetailLandlord from "./cpns/detail_04-landlord.vue";
import DetailComment from "./cpns/detail_05-comment.vue";
import DetailNotice from "./cpns/detail_06_notice.vue";
import DetailMap from "./cpns/detail_07-map.vue";
import DetailIntro from "./cpns/detail_08-intro.vue";
import TabControl from "@/components/tab-control/tab-control.vue";

const router = useRouter();
const route = useRoute();

// 获取房屋详情数据
const detailStore = useDetailStore();
detailStore.fetchHouseDetailData(route.params.id);
const { mainPart } = storeToRefs(detailStore);

// 监听返回的点击
const onClickLeft = () => {
  router.back();
};

// tabControl相关操作
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  // console.log(scrollTop.value);
  return scrollTop.value >= 300;
});

// const landlordRef = ref()
// const sectionEls = []
// const getSectionRef = (value) => {
//   sectionEls.push(value.$el)
// }
// const sectionEls = {"描述":el,'须知':el}
const sectionEls = ref({});
const names = computed(() => {
  return Object.keys(sectionEls.value);
});
const getSectionRef = (value) => {
  // sectionEls.push(value.$el)
  if (!value) return;
  const name = value.$el.getAttribute("name");
  sectionEls.value[name] = value.$el;
};

// pandiam1
let isClick = false
let currentDistance = -1
const handleClick = (index) => {
  // let instance = sectionEls[index].offsetTop
  // if(index == 1) {
  //   instance = instance -44
  // }
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let distance = el.offsetTop;
  if (index !== 0) {
    distance = distance - 44;
  }

  isClick = true
  currentDistance = distance
  console.log(currentDistance,'currentDistance');

  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

// 页面滚动，滚动时匹配对应的tabControl的index
const tabControlRef = ref()
watch(scrollTop, (newVal) => {
  console.log(newVal,'newVal');
  if (Math.round(newVal) === currentDistance) {
    isClick = false
  }
  if(isClick) return
  // 1.获取所有区域的offsetTop
  const els = Object.values(sectionEls.value);
  const values = els.map((el) => el.offsetTop);
  // console.log(values);
  // 2.根据索引去匹配想要的索引
  let index = values.length - 1;
  for (let i = 0; i <values.length; i++) {
    if (values[i] > newVal + 44) {
      index = i - 1;
      break;
    }
  }
  // console.log(index,'111111');
  tabControlRef.value?.setCurrentIndex(index) 
});


</script>
<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control
      v-if="showTabControl"
      class="tab-control"
      :titles="names"
      @tab-item-click="handleClick"
      ref="tabControlRef"
    />
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 轮播图 -->
    <div v-if="mainPart" class="main" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-info
        name="描述"
        :ref="getSectionRef"
        :detail-info="mainPart.topModule"
      />
      <detail-facility
        name="设施"
        :ref="getSectionRef"
        :detail-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord
        name="房东"
        :ref="getSectionRef"
        :detail-landlord="mainPart.dynamicModule.landlordModule"
      />
      <detail-comment
        name="评论"
        :ref="getSectionRef"
        :detail-comment="mainPart.dynamicModule.commentModule"
      />
      <detail-notice
        name="须知"
        :ref="getSectionRef"
        :detail-notice="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-map
        name="周边"
        :ref="getSectionRef"
        :detail-position="mainPart.dynamicModule.positionModule"
      />
      <detail-intro :detail-intro="mainPart.introductionModule" />
      <div class="footer">
        <img src="@/assets/img/detail/icon_ensure.png" alt="" />
        <div class="text">弘源旅途, 永无止境!</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab-control {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: #fff;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
