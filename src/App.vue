<script setup>
// import TabBar from "@/components/tabbar/index.vue"
import TabBar from "@/components/tabbar/tabbar-vant.vue"
import Loading from '@/components/loading/loading.vue'

import {useRoute} from "vue-router"
const route = useRoute()

</script>

<template>
  <div class="app">
    <!-- name属性 -->
    <!-- <keep-alive includes="home">
      <router-view></router-view>
    </keep-alive> -->
    <router-view v-slot="props">
      <keep-alive include="home">
      <Component :is="props.Component"></Component>
      </keep-alive>
    </router-view>

    <tab-bar v-show="!route.meta.hideTabbar" />
    <loading />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
