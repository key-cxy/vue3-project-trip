<script setup>
import useMainStore from '@/store/modules/main';

const mainStore = useMainStore()

</script>

<template>
  <div class="loading top-page" v-if="mainStore.isLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  .bg {
    background: url("@/assets/img/home/loading-bg.png") 0 0 / 100% 100%;
    width: 104px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
