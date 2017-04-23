<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Hello App!</h1>
    <ul>
      <li><router-link to="/home">跳转到index</router-link></li>
      <li><router-link to="/dashboard">跳转到dashboard</router-link></li>
    </ul>
    <router-view></router-view>
    <!--<loading></loading>-->
    <div class="site-version">v{{version}}</div>
  </div>
</template>

<script>
  import resInterceptor from "src/common/interceptor";
//  import Loading from "./components/loading";
  export default {
    data () {
      return {
        msg: 'Hello Vue!',
        version: '1.0.0'
      };
    },
    name: 'app',
    components: {
//      Loading
    },
    beforeCreate(){
      resInterceptor(this);	// 拦截器
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "~assets/scss/app.scss";
</style>
