<template>
  <div class="pop-wrap">
    <div class="pop-content">
      <span style="color: #d6c3ff">综合评分{{Math.round((8+Math.random())*10)}}</span><i class="el-icon-close" style="float: right; font-size: 1rem;" @click="closePop"></i>
      <resume @closePop="closePop" :data="data"/>
    </div>
  </div>
</template>

<script>
import resume from '../personal/components/resume'
export default {
  name: 'popResume',
  props: ['data'],
  components: {
    resume
  },
  created () {
    console.log(this.data)
  },
  methods: {
    closePop (data) {
      this.$emit('closePop', data)
    }
  }
}
</script>

<style scoped>

</style>
