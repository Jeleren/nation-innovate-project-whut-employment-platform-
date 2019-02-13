<template>
  <div class="form-wrap">
    <!--<headerBg></headerBg>-->
    <div class="form" ref="form">
      <div class="form-title">用户注册</div>
      <div class="form-input-item">
        <i></i><input type="tel" placeholder="请输入手机号码，将用于登录和找回密码" v-model="tel" @focus = inputFocus(2) @blur = inputBlur(2) />
      </div>
      <div class="form-input-item">
        <i></i><input type="text" placeholder="请输入用户名" v-model="username" @focus = inputFocus(4) @blur = inputBlur(4) />
      </div>
      <div class="form-input-item">
        <i></i><input type="password" placeholder="请输入密码，8-20位字母、数字、符号组合" v-model="password" @focus = inputFocus(6) @blur = inputBlur(6) autocomplete='off' />
      </div>
      <div class="form-input-item">
        <i></i><input type="password" placeholder="请再次输入密码" v-model="repeat_password" @focus = inputFocus(8) @blur = inputBlur(8) autocomplete='off' />
      </div>
      <div class="form-input-item">
        <i></i><input type="text" placeholder="请输入验证码" v-model="yzm" @focus = inputFocus(10) @blur = inputBlur(10) />
        <div class="form-button yz-button">获取短信验证码</div>
      </div>
      <div class="form-bottom">
        <div><div class="form-button zc-button">注册</div><a class="underline beside-a pointer" @click="toEntRegister">企业注册</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBg from '../../components/header_bg'
export default {
  name: 'user_reg',
  components: {
    headerBg
  },
  data () {
    return {
      username: '',
      tel: '',
      password: '',
      repeat_password: '',
      yzm: ''
    }
  },
  methods: {
    inputFocus (index) {
      // console.log(this.$refs['form'].childNodes)
      this.$refs['form'].childNodes[index].childNodes[0].style['backgroundColor'] = '#6bd9f2'
    },
    inputBlur (index) {
      this.$refs['form'].childNodes[index].childNodes[0].style['backgroundColor'] = '#ececec'
    },
    toEntRegister () {
      this.$router.push('ent_register')
    }
  }
}
</script>

<style scoped>
  .form-bottom{
    position: relative;
    margin: 3rem 0;
    display: flex;
    justify-content: center;
  }
</style>
