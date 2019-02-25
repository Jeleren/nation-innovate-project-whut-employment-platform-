<template>
<div class="form-wrap">
<!--<headerBg></headerBg>-->
    <div class="form">
      <div class="form-title">登录</div>
      <div class="form-input-item">
        <i></i><input id="user" type="text" placeholder="请输入用户名 / 手机号码 / 邮箱" v-model="username">
      </div>
      <div class="form-input-item">
        <i></i><input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="form-bottom">
        <div class="form-button" @click="doLogin">登&nbsp;&nbsp;&nbsp;录</div>
        <div class="other-option">
          <span>还没有账号？<a class="underline pointer" @click="toUserRegister">立即注册</a></span>
          <a class="pointer">忘记密码？</a>
        </div>
      </div>
    </div>
  <div class="footer"></div>
</div>
</template>

<script>
import headerBg from '../../components/header_bg'
export default {
  name: 'login',
  components: {
    headerBg
  },
  data () {
    return {
      username: 'jeleren',
      password: '123456'
    }
  },
  methods: {
    doLogin () {
      console.log(this)
      if (!this.username || !this.password) {
        this.$message({
          type: 'warning',
          message: '请输入完整信息'
        })
      }
      let user = new FormData()
      user.append('username', this.username)
      user.append('password', this.password)
      this.$store.dispatch('login', user).then(() => {
        this.$router.push('/directory_user')
      })
    },
    toUserRegister () {
      this.$router.push('register')
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-wrap .form .form-bottom {
    width: 100%;
    padding:2.25rem 1.2rem;
  }
  .other-option {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    font-size: .5625rem;
    color: #595959;
  }
</style>
