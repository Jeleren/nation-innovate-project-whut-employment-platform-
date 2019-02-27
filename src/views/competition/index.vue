<template>
  <div class="content-header-mar">
    <compFilter/>
    <compList :comList="comList"/>
  </div>
</template>

<script>
import compFilter from '../../components/filter'
import {fetchCompetition} from '@/api/first_page'
import compList from '../../components/compList'

export default {
  name: 'index',
  components: {
    compFilter,
    compList
  },
  computed: {
    comList () {
      return this.$store.state.pros.comList
    }
  },
  created () {
    if (!this.comList.length) {
      fetchCompetition().then(res => {
        this.$store.commit('SET_COM_LIST', res.data.comList)
      })
    }
  }
}
</script>

<style scoped>

</style>
