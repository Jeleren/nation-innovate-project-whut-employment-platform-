<template>
<div class="form-wrap content-top-mar">
    <div class="form">
      <div class="form-title">登录</div>
      <el-form label-width="80px" style="width: 80%">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-radio-group v-model="type" @change="changeUser">
            <el-radio :label=1 >学生</el-radio>
            <el-radio :label=2 >企业</el-radio>
            <el-radio :label=3 >教师</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="form-bottom">
        <div class="form-button" @click="doLogin">登&nbsp;&nbsp;&nbsp;录</div>
        <div class="other-option">
          <span>还没有账号？<a class="underline pointer" @click="toUserRegister">立即注册</a></span>
          <a class="pointer">忘记密码？</a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import headerBg from '../../components/header_bg'
// import {permissionRoute} from '@/utils/permissionRoute'

export default {
  name: 'login',
  components: {
    headerBg
  },
  data () {
    return {
      username: 'aiyane',
      password: 'zhangzhiqiang199',
      type: 1,
      redirect: undefined
    }
  },
  // watch: {
  //   $route: {
  //     handler: function (route) {
  //       this.redirect = route.query && route.query.redirect
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    doLogin () {
      if (!this.username || !this.password) {
        this.$message({
          type: 'warning',
          message: '请输入完整信息'
        })
      }
      let user = new FormData()
      user.append('username', this.username)
      user.append('password', this.password)
      this.$store.dispatch('login', user).then((res) => {
        // permissionRoute(res)
        // console.log(this.$router)
        if (res === 1) {
          // console.log('before')
          this.$router.push('/gc/directory_user')
          // console.log('after')
        } else {
          this.$router.push('/gc/ent')
        }
      })
    },
    toUserRegister () {
      this.$router.push('register')
    },
    changeUser () {
      console.log(this.type)
      switch (this.type) {
        case 1: {
          this.username = 'aiyane'
          this.password = 'zhangzhiqiang199'
          break
        }
        case 2: {
          this.username = '百度'
          this.password = '123456'
          break
        }
        case 3: {
          this.username = '贝尔实验室'
          this.password = '123456'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-wrap .form .form-bottom {
    width: 100%;
    padding:1rem 1.2rem;
  }
  .other-option {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    font-size: .5625rem;
    color: #595959;
  }
</style>
