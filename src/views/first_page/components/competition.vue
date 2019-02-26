<template>
  <div class="section-top">
    <sectionHead title="大赛活动" router="competition"/>
    <compList :comList="comList"/>
  </div>
</template>

<script>
import sectionHead from '../components/section_head'
import compList from '../../../components/compList'
import { fetchCompetition } from '@/api/first_page'

export default {
  name: 'competition',
  components: {
    sectionHead,
    compList
  },
  data () {
    return {
      comList: []
    }
  },
  created () {
    fetchCompetition().then(res => {
      // console.log(res)
      this.comList = res.data.comList.splice(0, 3)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
