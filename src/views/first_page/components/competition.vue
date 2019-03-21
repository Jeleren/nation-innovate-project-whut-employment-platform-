<template>
  <div class="section-top">
    <sectionHead title="大赛活动" router="competition"/>
    <compList :comList="comList"/>
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
  },
  computed: {
    comList () {
      return this.$store.state.pros.comList.slice(0, 3)
    }
  },
  created () {
    if (!this.comList.length) {
      this.$store.dispatch('getActiveList', {type: 1, num: 3})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
