<template>
  <div class="section-head">
    <span class="title pointer"><router-link :to="router">{{title}}</router-link></span>
    <span class="more pointer"><router-link :to="router">更多</router-link><i class="el-icon-arrow-right"></i></span>
  </div>
</template>

<script>
export default {
  name: 'section_head',
  props: {
    title: '',
    router: ''
  }
}
</script>

<style lang="scss" scoped>
.section-head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: .9375rem;
  color: #4A4A4A;
  padding: 0 .75rem;
  margin-bottom: .4375rem;
  line-height: 100%;
  .title {
    font-size: 1rem;
    font-weight: bold;
  }
  .more {
    padding-top: .2rem;
    font-size: .5rem;
  }
}
</style>
