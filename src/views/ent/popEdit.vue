<template>
  <div class="pop-wrap">
    <div class="pop-content clear">
      <span style="color: #d6c3ff">请只修改需要修改的部分</span><i class="el-icon-close" style="float: right; font-size: 1rem;" @click="closePop"></i>
      <empEdit :data="data" @closePop="closePop"/>
    </div>
  </div>
</template>

<script>
import empEdit from './employment/emp_edit'
export default {
  name: 'popEdit',
  props: ['data'],
  components: {
    empEdit
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
