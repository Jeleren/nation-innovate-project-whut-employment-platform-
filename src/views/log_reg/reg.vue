<template>
  <div class="form-wrap content-top-mar">
    <div class="form">
      <div class="form-title">注册</div>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="设置密码，由8-20位数字、字母、符号组成">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="输入相同的密码">
          <el-input v-model="passwordCheck" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="注册类型">
          <el-radio-group  v-model="type">
            <el-radio :label="1">个人</el-radio>
            <el-radio :label="2">企业</el-radio>
            <el-radio :label="3">教师（实验室）</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="获取邮箱验证码">
          <el-input v-model="v_code">
            <template slot="append"><el-button>点击获取验证码</el-button></template>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="form-bottom">
        <div class="form-button zc-button" @click="doReg">注册</div>
        <router-link class="set-type" to="/">返回登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import {register} from '@/api/log_reg'

export default {
  name: 'ent_reg',
  components: {
    // footer_bg
  },
  data () {
    return {
      show_region_pick: false,
      username: '百度',
      email: '17771396576@163.com',
      password: '123456',
      passwordCheck: '',
      region: '',
      v_code: '',
      type: 1
    }
  },
  methods: {
    setRegion (region) {
      this.region = region
      this.show_region_pick = false
      this.passiveArrow()
    },
    activeArrow () {
      let style = this.$refs.arrow.style
      style.borderLeftColor = '#6BD9F2'
      style.transform = `rotate(90deg)`
      style.transition = 'transform .2s linear'
    },
    passiveArrow () {
      let style = this.$refs.arrow.style
      style.transform = 'rotate(0deg)'
      style.transition = 'transform .2s linear'
      style.borderLeftColor = '#ececec'
    },
    toUserRegister () {
      this.$router.push('user_register')
    },
    doReg () {
      let data = new FormData()
      data.append('username', this.username)
      data.append('password', this.password)
      data.append('email', this.email)
      data.append('type', this.type)
      // let data = {username: this.username, password: this.password, email: this.email}
      register(data).then(res => {
        console.log(res)
        if (res.data) {
          this.$store.dispatch('login', {username: res.data.username, password: this.password}).then(res => {
            if (res === 1) {
              this.$router.push('/gc/directory_user')
            } else {
              this.$router.push('/gc/ent')
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.form-input-item .tra-ani {
  width: 0;
  height: 0;
  border-top: .5rem solid transparent;
  border-bottom: .5rem solid transparent;
  border-left: .875rem solid #ececec;
  border-radius: 0;
  background-color: #fff;
}
.form-bottom{
  position: relative;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  /*flex-direction: column;*/
}
  .set-type {
    position: absolute;
    font-size: .6rem;
    right: 1rem;
    bottom: 0;
    text-decoration: underline;
    cursor: pointer;
    /*vertical-align: bottom;*/
    /*margin-left: 2rem;*/
    /*margin-top: 1rem;*/
  }
</style>
