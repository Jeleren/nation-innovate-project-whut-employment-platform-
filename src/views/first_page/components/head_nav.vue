<template>
  <div class="head-nav">
    <div class="nav-wrap clear">
      <router-link to="main" active>&nbsp;&nbsp;首页&nbsp;&nbsp;</router-link>
      <router-link to="employment">招聘信息</router-link>
      <router-link to="competition">大赛活动</router-link>
      <router-link to="lab">实验室展示</router-link>
      <router-link to="pros">职业圈</router-link>
    </div>
    <logState/>
  </div>
</template>

<script>
import logState from '../../../components/log_state'
export default {
  name: 'head_nav',
  components: {
    logState
  }
}
</script>

<style lang="scss" scoped>
  .router-link-exact-active {
    background: #056FD2;
    font-weight: bold;
  }
  .head-nav {
    position: relative;
    width: 100%;
    background-color: #0074e1;
    height: 2.3rem;
    font-size: .5rem;
    box-shadow:0 1px 1px 0 rgba(28,156,231,0.2);
    .nav-wrap {
      /*height: 2.3rem;*/
      /*line-height: 100%;*/
      a {
        display: inline-block;
        /*height: 100%;*/
        line-height: 2.3rem;
        /*vertical-align: top;*/
        /*box-sizing: content-box;*/
        padding: 0 .78rem;
        color: #fff;
        text-decoration: none;
        float: left;
        &:hover {
          background-color: #056FD2;
        }
      }
    }
    .active-router {
      background-color: #056FD2;
    }
    /*.unlog, .log {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 0;*/
    /*width: 6.5625rem;*/
    /*height: 100%;*/
    /*display: flex;*/
    /*align-items: center;*/
    /*background-color: #22b9eb;*/
    /*color: #fff;*/
    /*cursor: pointer;*/
    /*span {*/
    /*display: inline-block;*/
    /*margin-left: .1875rem;*/
    /*}*/
    /*i {*/
    /*display: inline-block;*/
    /*}*/
    /*}*/
    /*.unlog {*/
    /*i {*/
    /*margin-left: 1.4375rem;*/
    /*margin-top: .1rem;*/
    /*width: .6875rem;*/
    /*height: .6875rem;*/
    /*background: url(../../../assets/first_page/unLog.png);*/
    /*-webkit-background-size: cover;*/
    /*background-size: cover;*/
    /*}*/
    /*}*/
    /*.log {*/
    /*i {*/
    /*height: .75rem;*/
    /*width: .625rem;*/
    /*margin-left: 1.5rem;*/
    /*background: url(../../../assets/first_page/log.png);*/
    /*-webkit-background-size: cover;*/
    /*background-size: cover;*/
    /*}*/
    /*}*/
  }
</style>
