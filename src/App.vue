<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  var jQuery = require('jquery');
  window.jQuery = window.$ = jQuery;
  export default {
    name: 'app'
  };
</script>

<style>
@import './assets/css/pub.css';
@import './assets/css/common.scss';
@import './assets/iconfont/iconfont.css';
#app {
  font-family: 'PingFang SC','Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
