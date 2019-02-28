<template>
  <div id="app">
    <headerBg/>
    <router-view></router-view>
    <footerBg/>
  </div>
</template>

<script>
import headerBg from './components/header_bg'
import footerBg from './components/footer_bg'
export default {
  name: 'App',
  components: {
    headerBg,
    footerBg
  }
}
</script>

<style>
#app {
  /*font-family: 'Microsoft YaHei UI', Helvetica, Arial, sans-serif;*/
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  * {
    box-sizing: border-box;
    letter-spacing: .05rem;
  }
  a {
    cursor: pointer;
    /*color: #595959;*/
  }
  i {
    display: inline-block;
  }
</style>
