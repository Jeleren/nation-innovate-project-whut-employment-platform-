<template>
  <div>
    <div class="unlog" v-if="!$store.state.user.isLogin">
      <span>登录 / 注册</span>
    </div>
    <div class="log" v-if="$store.state.user.isLogin" @mouseover="showSelect" @mouseleave="hideSelect">
      <img :src="$store.state.user.userInfo.head">
      <i class="el-icon-caret-bottom"></i>
      <div class="select-list" ref="select">
        <div class="list-item" @click="toPersonal">个人中心</div>
        <div class="list-item" @click="toInfoSet" >个人设置</div>
        <div class="list-item" @click="logOut">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: 'log_state',
  methods: {
    toPersonal () {
      // console.log('to person')
      if (!/person/.test(this.$router.currentRoute.path)) {
        this.$router.push(`/personal/${this.$store.state.user.userInfo.id}`)
      }
    },
    toInfoSet () {
      this.$router.push('/personal/userInfo')
    },
    logOut () {
      // console.log('log out')
      cookie.remove('user_id')
      this.$router.push({name: 'login'})
    },
    showSelect () {
      this.$refs.select.style.display = 'block'
    },
    hideSelect () {
      this.$refs.select.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
  .unlog, .log {
    position: absolute;
    top: 0;
    right: 0;
    /*width: 6.5625rem;*/
    height: 100%;
    display: flex;
    align-items: center;
    /*background-color: #22b9eb;*/
    color: #fff;
    cursor: pointer;
    font-size: .5rem;
  span {
    display: inline-block;
    margin-left: .1875rem;
  }
  }
  .log {
    /*position: relative;*/
    font-size: .6rem;
    margin-right: .5rem;
    img {
      width: 1.7rem;
      height: 1.7rem;
      border-radius: 50%;
      margin-right: .2rem;
    }
    .select-list {
      position: absolute;
      top: 2.3rem;
      left: -.2rem;
      display: none;
      z-index: 10;
      font-size: .6rem;
      min-width: 3.25rem;
      text-align: center;
      background: #0074e1;
      .list-item {
        height: 1rem;
        line-height: 1rem;
        &:hover {
          background: #3EAAE9;
        }
      }
    }
  }
</style>
