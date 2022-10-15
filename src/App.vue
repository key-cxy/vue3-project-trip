<script setup>
// import TabBar from "@/components/tabbar/index.vue"
import TabBar from "@/components/tabbar/tabbar-vant.vue"
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar />
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
