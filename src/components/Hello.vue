<template>
<div class="hello">
  <mt-tab-container class="page-tabbar-container" v-model="selected">

    <mt-tab-container-item id="约球">
      <yueqiu-component></yueqiu-component>
    </mt-tab-container-item>

    <mt-tab-container-item id="看球">
      <kanqiu-component></kanqiu-component>
    </mt-tab-container-item>

    <mt-tab-container-item id="发现">
      <find-component></find-component>
    </mt-tab-container-item>

    <mt-tab-container-item id="我的">
      <mine-component></mine-component>
    </mt-tab-container-item>
  </mt-tab-container>

  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="约球">
      <img slot="icon" src="../assets/logo.png"> 约球
    </mt-tab-item>
    <mt-tab-item id="看球">
      <img slot="icon" src="../assets/logo.png"> 看球
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" src="../assets/logo.png"> 发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../assets/logo.png"> 我的
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
import yueqiuComponent from '../components/Yueqiu.vue';
import kanqiuComponent from '../components/Kanqiu.vue';
import findComponent from '../components/find.vue';
import mineComponent from '../components/Mine.vue';
export default {
  name: 'hello',
  data() {
    return {
      selected: '约球'
    };
  },
  components: {
    yueqiuComponent,
    kanqiuComponent,
    findComponent,
    mineComponent
  }
}
</script>

<style>
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>
