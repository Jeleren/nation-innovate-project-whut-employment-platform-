<template>
  <div class="form-wrap">
    <!--<headerBg></headerBg>-->
    <div class="form">
      <div class="form-title">注册</div>
      <inputItem placeholder="请输入名称" @getContent="setEntName"/>
      <inputItem placeholder="请设置密码，由8-20位数字、字母、符号组成" type="password" @getContent="setPassword" />
      <inputItem placeholder="请输入相同的密码" type="password" @getContent="setPassword" />
      <inputItem placeholder="请输入电子邮箱" type="email" @getContent="setEmail" />
      <div class="set-type"><span>请选择注册类型：</span>
        <el-radio-group v-model="type">
          <el-radio :label="1">个人</el-radio>
          <el-radio :label="2">企业</el-radio>
          <el-radio :label="3">教师（实验室）</el-radio>
        </el-radio-group>
      </div>
      <!--<div class="form-input-item" >-->
        <!--<i class="tra-ani" ref="arrow"></i>-->
        <!--<input placeholder="请选择省份及城市" readonly v-model="region" @click="showRegionPick" />-->
        <!--<regionPick @setRegion = setRegion v-if="show_region_pick" />-->
      <!--</div>-->
      <invalidCheck mode="获取邮箱验证码" :target="email" @getContent="setVerificationCode"/>
      <div class="form-bottom">
        <div>
          <div class="form-button zc-button">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBg from '../../components/header_bg'
import inputItem from '../../components/input_item'
import regionPick from './region_pick'
import invalidCheck from './invalid_check'
// import el-radio from 'element-ui/el-radio'
export default {
  name: 'ent_reg',
  components: {
    headerBg,
    inputItem,
    regionPick,
    invalidCheck
  },
  data () {
    return {
      show_region_pick: false,
      entName: '',
      email: '',
      password: '',
      region: '',
      v_code: '',
      type: 1
    }
  },
  methods: {
    setEntName (prop) {
      this.entName = prop
    },
    setEmail (prop) {
      this.email = prop
    },
    setPassword (prop) {
      this.password = prop
    },
    setVerificationCode (prop) {
      this.v_code = prop
    },
    showRegionPick () {
      if (this.show_region_pick) {
        this.passiveArrow()
      } else {
        this.activeArrow()
      }
      this.show_region_pick = !this.show_region_pick
    },
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
}
  .set-type {
    font-size: .6rem;
    margin-top: 1.5rem;
  }
</style>
