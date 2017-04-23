<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Hello App!</h1>    <
    <router-view></router-view>
    <loading></loading>
  </div>
</template>

<script>
  import resInterceptor from "src/common/interceptor";
  import Loading from "./components/loading";

  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    name: 'app',
    components: {
      Loading
    },
    beforeCreate(){
      resInterceptor(this);	// 拦截器
    }
  }


</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~assets/scss/app.scss";
</style>
