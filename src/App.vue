<template>
<div id="#app">
<div class="front">
  <!-- 使用写好的AppHeader.vue -->
    <Appheader></Appheader>
    <!-- 使用写好的Appsilder.vue,如果不用会报错 -->
    <Appsilder></Appsilder>  
    <!-- 设置路由占位 -->
    <router-view></router-view>
	</div>
</div>

</template>

<script>

import Appheader from './components/AppHeader';
import Appsilder from './components/AppSilder';
export default {
  name: 'app',
  components: {
    //注册AppHeader.vue组件
    Appheader,
    Appsilder,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
