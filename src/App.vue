<template>
  <div id="app">
    <h2>欢迎体验 Vue 3.0 的写法! 点击下方的路由链接查看组件:</h2>
    <router-link to="counter">Router1 简单计数器</router-link>
    <router-link to="name">Router2 计算属性</router-link>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';

export default createComponent({
  name: 'App',
  props: {},
});
</script>

<style>
#app {
  font-family: 'Cascadia Code', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a, a:hover, a:link, a:visited {
  text-decoration: none;
  font-weight: bold;
  color: #36985f;
  margin: 0 20px;
}
</style>
