<template>
  <div class="section-top">
    <sectionHead title="大赛活动"/>
    <compList/>
  </div>
</template>

<script>
import sectionHead from '../components/section_head'
import compList from '../../../components/compList'

export default {
  name: 'competition',
  components: {
    sectionHead,
    compList
  }
}
</script>

<style lang="scss" scoped>
</style>
