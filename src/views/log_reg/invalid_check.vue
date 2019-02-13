<template>
  <div class="form-input-item">
    <i ref="i"></i>
    <input type="text" v-model="content" placeholder="请输入验证码" @focus="inputFocus" @blur="inputBlur"/>
    <div class="form-button yz-button" @click="getVerificationCode">{{mode}}</div>
  </div>
</template>

<script>
export default {
  name: 'invalid_check',
  props: {
    target: '',
    mode: ''
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    inputFocus () {
      this.$refs.i.style.backgroundColor = '#6bd9f2'
    },
    inputBlur () {
      this.$refs.i.style.backgroundColor = '#ececec'
    },
    getVerificationCode () {
      if (this.email) {
        console.log()
        this.$emit('getContent', this.content)
      } else {
        this.$message({
          type: 'error',
          message: '请输入邮箱'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
